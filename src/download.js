const fs = require('fs')
const https = require('https')

const URL = 'https://raw.githubusercontent.com/KhronosGroup/OpenGL-Registry/master/xml/gl.xml'
const DEST = './latest/gl.xml'

if (!fs.existsSync('./latest')) {
  fs.mkdir('./latest', (err) => {
    if (err) throw err
  })
}

function download (url, dest, callback) {
  var output = fs.createWriteStream(dest)

  https.get(url, (res) => {
    const { statusCode } = res
    // const contentType = res.headers['content-type']

    let error
    if (statusCode !== 200) {
      error = new Error('Request Failed.\n' +
                        `Status Code: ${statusCode}`)
    }

    /**
    else if (!/^application\/json/.test(contentType)) {
      error = new Error('Invalid content-type.\n' +
                        `Expected application/json but received ${contentType}`)
    }
    */
    if (error) {
      console.error(error.message)
      // consume response data to free up memory
      res.resume()
      return
    }

    res.setEncoding('utf8')
    res.pipe(output)
    output.on('finish', () => {
      output.close(callback)
    })
  }).on('error', (e) => {
    console.error(`Got error: ${e.message}`)
    fs.unlink(dest)
  })
}

download(URL, DEST, () => { console.log(`File ${DEST} downloaded successfully`) })

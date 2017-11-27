const fs = require('fs')
const libxmljs = require('libxmljs')

function readGLXml (dest, xml) {
  let xmlDoc = libxmljs.parseXml(xml)

  let features = xmlDoc.find('/registry/feature')
  let entries = []
  for (let f of features) {
    // console.log(f.attr('name').value())

    for (let child of f.childNodes()) {
      if (child.name() === 'remove') {
        let comment = child.attr('comment').value()

        let exp = /^Compatibility-only GL (\d+[.]\d+) features removed from GL (\d+[.]\d+)$/

        // EXTRACT ORIGINAL GL SPEC
        let originalGLSpec = ''
        let removedAt = ''
        let result = exp.exec(comment)
        if (result) {
          originalGLSpec = result[1]
          removedAt = result[2]
        }

        // console.log(originalGLSpec + ' >> ' + removedAt)

        for (let entry of child.childNodes()) {
          if (entry.name() === 'enum') {
            let enumName = entry.attr('name').value()
            let item = { name: enumName, type: 'enum', original: originalGLSpec, removedAt: removedAt }
            entries.push(item)
          } else if (entry.name() === 'command') {
            let commandName = entry.attr('name').value()
            let item = { name: commandName, type: 'command', original: originalGLSpec, removedAt: removedAt }
            entries.push(item)
          }
        }

        // console.log(`[Enums, commands] : [${noOfEnums},${noOfCommands}]`)
      }
    }
  }

  let output = JSON.stringify(entries)
  fs.writeFile(dest, output, (err) => {
    if (err) throw err
    console.log('The file has been saved!')
  })
}

function begin (src, dest, onError) {
  fs.readFile(src, (err, data) => {
    if (err) onError(err)

    readGLXml(dest, data)
  })
}

begin('./latest/gl.xml', './latest/gl.json', (err) => {
  console.log(`Using fallback ${err}`)

  begin('./fallback/gl.xml', './fallback/gl.json', (e2) => {
    throw e2
  })
})

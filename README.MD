# gl-xml-query

> Displays all depreciated OpenGL commands and enums w.r.t to OpenGL core profile

[Example](https://tgsstdio.github.io/gl-xml-query/)

Depreciated functions can be found at [latest/gl.json](latest/gl.json)

## npm

```` > npm run-script download ````

 - Runs src/download.js 
    - Downloads [gl.xml](https://raw.githubusercontent.com/KhronosGroup/OpenGL-Registry/master/xml/gl.xml) from 
    [KhronosGroup](https://github.com/KhronosGroup/OpenGL-Registry) github profile.

```` > npm run-script parse ````
 - Runs src/parse.js
    - Parse xml file via [libxmljs](https://github.com/libxmljs/libxmljs) into JSON (i.e. [latest/gl.json](latest/gl.json))

## LICENSE

Copyright (c) 2017 David Young

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
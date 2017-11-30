# gl-xml-query

> Displays all depreciated OpenGL commands and enums w.r.t to OpenGL core profile

Depreciated functions can be found at [latest/gl.json](latest/gl.json)

## npm

```` > npm run-script download ````

 - Runs src/download.js 
    - Downloads [gl.xml](https://raw.githubusercontent.com/KhronosGroup/OpenGL-Registry/master/xml/gl.xml) from 
    [KhronosGroup](https://github.com/KhronosGroup/OpenGL-Registry) github profile.

```` > npm run-script parse ````
 - Runs src/parse.js
    - Parse xml file via [libxmljs](https://github.com/libxmljs/libxmljs) into JSON (i.e. [latest/gl.json](latest/gl.json))


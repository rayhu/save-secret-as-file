const core = require('@actions/core')
const fs = require('fs')
const uniqueFilename  = require('unique-filename')

try {

    const secret = core.getInput('secret')
    const filename = core.getInput('filename')

    if (filename=="~")
        filename = uniqueFilename(".")

    fs.writeFileSync(filename,secret,'utf8')

    core.setOutput("filename", filename)
}
catch (error){
    core.setFailed(error.message)
}
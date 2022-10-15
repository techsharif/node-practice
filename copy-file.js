const fs = require('fs')
const path = require('path')

function checkOrCopyFile(fromPath, toPath, fileName) {
    try {
        var toFile = path.join(toPath, fileName);
        if (fs.existsSync(toFile)) {
            console.log(fileName, "already exists");
            return true;
        }

        var fromFile = path.join(fromPath, fileName);
        if (fs.existsSync(fromFile)) {
            if (!fs.existsSync(toPath)) {
                console.log(toPath, "is not exists. creating..")
                fs.mkdirSync(toPath, {recursive: true})
            }
            console.log(fileName, "copying")
            fs.copyFileSync(fromFile, toFile);
            return true;

        } else {
            console.log(fromFile, "is not exists");
            return false;
        }
    } catch (error) {
        console.log(error)
        return false
    }

}


var fromDir = "/Users/sharif/Desktop/work/node/practice/from"
var toDir = "/Users/sharif/Desktop/work/node/practice/to/inner"
var fileName = "test.text"
checkOrCopyFile(fromDir, toDir, fileName)

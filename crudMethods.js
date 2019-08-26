const fs = require('fs');
const {promisify} = require('util');
const proReadFile = promisify(fs.readFile);  
const proDeleteFile = promisify(fs.unlink);

var crudList = {};

crudList.create = function (filename, data) {
    var stringifiedData = JSON.stringify(data)
    fs.writeFile(filename, stringifiedData, (err) => {
        // response.end("User Created");
        if (err) {
            console.log(err);
        }
    })
    
}

crudList.read = function (filename,callback) {
    var dir = __dirname + '/';
    proReadFile(dir + filename,callback)
    .then(answer=>{
        callback(answer)
    })
    
}

crudList.update = function () {

}

crudList.delete = function (path) {
        proDeleteFile(path)
        .catch(err => {
            callback(err)
        } )
}

module.exports = crudList;





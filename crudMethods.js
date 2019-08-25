const fs = require('fs');

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

crudList.read = function (filename) {
    var dir = __dirname + '/';
    fs.readFile(dir + filename, (err, data) => {
        var stringifiedData = JSON.stringify(data);
        if (err) {
            console.log(err);
        }
        // callback(stringifiedData);
    })
}

crudList.update = function () {

}

crudList.delete = function () { 
        fs.delete()
}

module.exports = crudList;





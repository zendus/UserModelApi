const http = require('http');
const stringDecoder = require('string_decoder').StringDecoder;
const { parse } = require('url');
const action = require('./crudMethods');
const router = require('./router');
const fs = require('fs');

var decoder = new stringDecoder('utf-8');
server = http.createServer((request, response) => {
    var parsedurl = parse(request.url, true);


    if (parsedurl.method == 'POST') {
        var container = {};
        request.on('data', (receivedData) => {
            container = JSON.parse(receivedData);
        });
        
        request.on('end', () => {
            router(request.method,container);
            return response.end('done');
        });


    }

    var dir = __dirname + '/';
    
    if (request.method == 'GET') {
        (function (filename) {
            fs.readFile(dir + filename, (err, data) => {
                if (err) {
                    console.log(err);
                }
                var stringifiedData = JSON.stringify(data);
                response.end(stringifiedData);
            })
        })('lilStunt');
    }

    if (request.method == 'DELETE'){
        (function(path) {
            fs.unlink(dir + path, (err)=>{
                if (err){
                    console.log(err)
                }
            })

        })('Stu201503018');
    }


})

server.listen(8080, () => {
    console.log("Server is running!");
})

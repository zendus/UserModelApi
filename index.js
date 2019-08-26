const http = require('http');
const stringDecoder = require('string_decoder').StringDecoder;
const { parse } = require('url');
const action = require('./crudMethods');
const router = require('./router');
const fs = require('fs');

var decoder = new stringDecoder('utf-8');
server = http.createServer((request, response) => {
    var parsedurl = parse(request.url, true);


    if (request.method == 'POST') {
        var container = {};
        request.on('data', (receivedData) => {
            container = JSON.parse(receivedData);
        });
        
        request.on('end', () => {
            router(request.method,container);
            response.end('done');
        });


    }

    var dir = __dirname + '/';
    
    if (request.method == 'GET') {
        // (function (filename) {
        //     fs.readFile(dir + filename, 'utf-8', (err, data) => {
        //         if (err) {
        //             console.log(err);
        //         }
        //         response.end(data);
        //     })
        // })('lilStunt');
        action.read('lilStunt', (data) =>{
            response.end(data);
        })
    }

    if (request.method == 'DELETE'){
        // (function(path) {
        //     fs.unlink(dir + path, (err)=>{
        //         if (err){
        //             console.log(err)
        //         }
        //     })

        // })('Stu2015');
        // response.end('end');
        action.delete(dir + 'Stu2015', (err) => {
            if (err){
                console.log(err)
            }
        })
        response.end('file deleted');
    }



})

server.listen(8080, () => {
    console.log("Server is running!");
})

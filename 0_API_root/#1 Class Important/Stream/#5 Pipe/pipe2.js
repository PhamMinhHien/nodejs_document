const fs = require('fs')
const http = require('http')
const hostname = '127.0.0.1';
const port = 3000;

http.createServer((req,res) => {
    var dest1, dest2 
    res.writeHead(200 , { 'Content-Type' : 'type/text'})
    fs.createReadStream(__dirname + '/text1.txt').pipe(res)
}).listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
})
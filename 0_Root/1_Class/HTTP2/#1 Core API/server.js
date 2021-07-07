const http = require('http2')
const fs = require('fs')


const server = http.createSecureServer({
    key: fs.readFileSync('local-privkey.pem'),
    cert: fs.readFileSync('localhost-cert.pem')
})


// Bat event khi server hoat dong 
server.on('error' , (err) => console.log(err))
server.on('stream',(stream, headers) => {
    // stream is a Duplex
    stream.respond({
        'content-type': 'text/html',
        ':status': 200
    });
    stream.end('<h1>Hello World</h1>');
})
server.listen(8443);
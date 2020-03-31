// -----------------------------------------------------------------------------
// Demo 1 : Sử dụng của chính Node JS => tao Request len server 
// -----------------------------------------------------------------------------

const https = require('https')

// chuan bi data 
const data = JSON.stringify({
    todo: "Create Request den server voi http Post = Node thuan "
})

// Option for request 
const options = {
    hostname: 'whatever.com',
    port: 443,
    path: '/todos',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
    } 
}

// request 
const req = https.request(options, res => {
    // Incoming Messgae => tin nhan phan hoi lai 
    console.log(`statusCode: ${res.statusCode}`)

    // Bat event phan hoi 
    res.on('data' , d => {
        process.stdout.write(d)
    })
})


req.on('error' , error => {
    console.error(error);
})

req.write(data)
req.end()
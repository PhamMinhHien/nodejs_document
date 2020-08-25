

const http = require('http')

const port = process.env.PORT // May chủ được chỉ định sẵn trong cấu hình env : 

const server = http.createServer((req,res) => {
    res.statusCode = 200 
    res.setHeader('content-type' , 'text/html')
    res.end('<> HTML TAG</>')
})
server.listen(port, () => {
    console.log(`Server running at port ${port}`)
})
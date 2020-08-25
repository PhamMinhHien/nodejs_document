
const http = require('http')
const hostname = '127.0.0.1'
const port = 4000

// Tạo mới 1 server => thực thi những gì bên trong đó 
const server = http.createServer((req,res)=> {
    res.end()
}) ;

/*
    * Server class kế thừa từ EventEmitter => nên nó có chọn sự kiện 
*/
server.on('error', (err,socket)=>{
    socket.end('HTTP/1.1 400 Bad Request ')
})

// Lăng nghe - sự kiện để có thể chạy server 
server.listen(port , hostname , () => {
	console.log(`Server running at http://${hostname}:${port}/`);
})
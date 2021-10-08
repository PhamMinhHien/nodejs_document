
const http = require('http');
const fs = require('fs') // Đọc luồng file 
const hostname = '127.0.0.1';
const port = 3000;

http.createServer((req, res) => {
	
	// Header kiểu phân tán 
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	// Header write vào stream 
	res.writeHead(200 ,{'Content-Type':'text/plain'})
	/* 
		* Cơ chế sử dụng PIPE - pipe là sự kết hợp của Writeable và Readable ( cả viết và đọc stream )
        * Ý nghĩa ví dụ : Đọc luồng trực tiếp - ko cần phải thông qua việc mở file -> viết vào luồng 
        * -> đọc luồng file có gì => Mất thời gian 
	*/
	fs.createReadStream(__dỉrname,'text.txt').pipe(res) // Đọc file và đưa nó vào res để trả lại .
	res.end('Hello World');

}).listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
})
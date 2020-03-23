

/*
    Object này được tạo ra trong nội bộ và trở về từ http.request(). 
    Nó đại diện cho một request đang thực hiện có header đã được xếp hàng. 
    Header là vẫn có thể thay đổi bằng cách sử dụng setHeader(name, value), getHeader(name), removeHeader(name)API. Header thực tế sẽ được gửi cùng với đoạn dữ liệu đầu tiên hoặc khi gọi request.end().

    Để nhận được response, hãy thêm một người nghe cho 'response' object yêu cầu . 'response'sẽ được phát ra từ object request khi các header response đã được nhận. Sự kiện 'response' này được thực thi với một đối số là một thể hiện của http.IncomingMessage.

    Trong 'response'sự kiện, người ta có thể thêm người listen vào  object response; đặc biệt để lắng nghe 'data'sự kiện

    Nếu không có 'response'trình xử lý nào được thêm vào, thì response sẽ bị loại bỏ hoàn toàn. Tuy nhiên, nếu một 'response' trình xử lý sự kiện được thêm vào, thì dữ liệu từ object response phải được tiêu thụ, bằng cách gọi response.read() bất cứ khi nào có 'readable'sự kiện hoặc bằng cách thêm một 'data'trình xử lý hoặc bằng cách gọi .resume()phương thức. Cho đến khi dữ liệu được tiêu thụ, 'end'sự kiện sẽ không kích hoạt. Ngoài ra, cho đến khi dữ liệu được đọc, nó sẽ tiêu thụ bộ nhớ mà cuối cùng có thể dẫn đến lỗi 'process out of memory'.

    Không giống như request object, nếu response đóng sớm, response object không phát ra một 'error' sự kiện mà thay vào đó phát ra 'aborted' sự kiện.

    Node.js không kiểm tra xem Độ dài nội dung và độ dài của phần thân được truyền có bằng nhau hay không.

*/

// -----------------------------------------------------------------------------
// Tao 1 request gia tu Client len Server 
// -----------------------------------------------------------------------------


const http = require('http');

const hostname = '127.0.0.1';
const port = 6000;

const req = http.request({
    host: '127.0.0.1',
    port: 8080,
    method:"POST"
}, (res => {
    res.resume()
    res.on('end',()=> {
        if(!res.complete)
        console.log("The connection error ! ")
    })
}))

const server = http.createServer((req, res) => {

   

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
    // res.write("String return ")
});




server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})
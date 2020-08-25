/*
    * Một IncomingMessage đối tượng được tạo bởi http.Server hoặc http.ClientRequest và được chuyển làm đối số đầu tiên 
    * cho 'request' và 'response' sự kiện tương ứng. Nó có thể được sử dụng để truy cập trạng thái phản hồi, tiêu đề 
    * và dữ liệu.
*/

// -----------------------------------------------------------------------------
// Ví dụ demo 
// -----------------------------------------------------------------------------
const http = require('http')
const req = http.request({
  host: '127.0.0.1',
  port: 8080,
  method: 'POST'
}, (res) => {
  res.resume();
  res.on('end', () => {
    if (!res.complete)
      console.error(
        'The connection was terminated while the message was still being sent');
  });
});



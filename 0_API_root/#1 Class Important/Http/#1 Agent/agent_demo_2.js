

/* agent.createConnection(options[, callback])
    * Tạo một socket / stream được sử dụng cho các request HTTP.

    * Theo mặc định, chức năng này giống như net.createConnection(). Tuy nhiên, các tác nhân tùy chỉnh có thể ghi đè
    * phương thức này trong trường hợp mong muốn linh hoạt hơn.
    
    * Một socket / stream có thể được cung cấp theo một trong hai cách: bằng cách return sream/socket từ chức năng này
    * hoặc bằng cách chuyển sream/socket đến callback.
    
    * Phương thức này được đảm bảo trả về một instance của lớp <net.Socket> , một lớp con của <stream.Duplex> , trừ 
    * khi người dùng chỉ định loại ổ cắm khác với <net.Socket> .

*/

const http = require('http') // yêu cầu thư viện 
const options = 
{
    keepAlive: true,
    keepAliveMsecs: 1000,
    maxSockets: 256,
    maxFreeSockets: 255,
    timeout: 100
}

var agent = new http.Agent(options) // Tao instance cua Class 

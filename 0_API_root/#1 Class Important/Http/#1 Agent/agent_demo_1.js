

// -----------------------------------------------------------------------------
// Cách sử dụng đơn giản class của Agent 
// -----------------------------------------------------------------------------

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

/**
    Phá hủy bất kỳ socket hiện đang được sử dụng bởi các agent.
    * Thường không cần thiết phải làm điều này. Tuy nhiên, nếu bạn đang sử dụng một tác nhân có bật KeepAlive,
    * sau đó tốt nhất là tắt agent một cách rõ ràng khi bạn biết rằng nó sẽ không còn được sử dụng. Nếu không thì,
    * socket có thể bị treo trong một thời gian khá dài trước khi máy chủ chấm dứt chúng.
 */

console.log(agent.destroy()) 

/*
    * options trong socket.connect() cũng được hỗ trợ.
    * Mặc định http.globalAgentđược sử dụng bởi http.request() có tất cả các giá trị này được đặt thành mặc định 
    * tương ứng của chúng.
    * Để cấu hình bất kỳ trong số chúng, một instance tùy chỉnh http.Agent phải được tạo.
*/

    const http = require('http');
    const keepAliveAgent = new http.Agent({ keepAlive: true });
    options.agent = keepAliveAgent;
    http.request(options, onResponseCallback);
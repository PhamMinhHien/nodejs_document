/** Class Agent 
 * Chức năng : chịu trách nhiệm quản lý tính bền vững của connect và tái sử dụng (reuse) cho các client HTTP
 * Cơ chế hoạt động :
    An Agent chịu trách nhiệm quản lý tính bền vững của connect và tái sử dụng (reuse) cho các client HTTP. 
    Nó duy trì một queue các yêu cầu đang chờ xử lý cho một server và port nhất định, sử dụng lại một connect ổ cắm (Sockets) cho mỗi lần cho đến khi queue trống, tại thời điểm đó, ổ cắm (Sockets) bị phá hủy hoặc được đưa vào một nhóm nơi nó được giữ lại để sử dụng cho các yêu cầu đến cùng một server và port. 
    Cho dù nó bị phá hủy hoặc gộp lại tùy thuộc vào keepAlive tùy chọn .

    Các connect được gộp chung đã bật TCP Keep-Alive cho chúng, nhưng các server vẫn có thể đóng các connect nhàn rỗi, trong trường hợp đó chúng sẽ bị xóa khỏi nhóm và một connect mới sẽ được thực hiện khi yêu cầu HTTP mới được thực hiện cho server và port đó. 
    Server cũng có thể từ chối cho phép nhiều yêu cầu trên cùng một connect, trong trường hợp đó, connect sẽ phải được làm lại cho mọi yêu cầu và không thể được gộp lại. Họ Agent vẫn sẽ thực hiện các yêu cầu đến server đó, nhưng mỗi yêu cầu sẽ xảy ra qua một connect mới.

    Khi một connect được đóng bởi client hoặc server, nó sẽ bị xóa khỏi nhóm. Bất kỳ ổ cắm (Sockets) không sử dụng nào trong nhóm sẽ không được lọc để không duy trì quá trình Node.js khi không có yêu cầu chưa xử lý. (xem socket.unref()).

    Đó là một thực tế tốt, đối với destroy() một Agent trường hợp khi nó không còn được sử dụng, bởi vì các ổ cắm (Sockets) không sử dụng tiêu tốn tài nguyên hệ điều hành.

    Các socket được loại bỏ khỏi agent khi socket phát ra một 'close' event hoặc một 'agentRemove' event. Khi có ý định giữ một yêu cầu HTTP mở trong một thời gian dài mà không giữ nó trong agent, có thể thực hiện một số điều sau đây:
*/ 
  http.get(options, (res) => {
    // Do stuff
  }).on('socket', (socket) => {
    socket.emit('agentRemove');
  });

/* 
    agent cũng có thể được sử dụng cho một yêu cầu cá nhân. Bằng cách cung cấp {agent: false} dưới dạng tùy chọn cho http.get()hoặc các http.request() chức năng, việc sử dụng một lần Agent với các tùy chọn mặc định sẽ được sử dụng cho connect client. 
*/

  http.get({
    hostname: 'localhost',
    port: 80,
    path: '/',
    agent: false  // Create a new agent just for this one request
  }, (res) => {
    // Do stuff with response
  });
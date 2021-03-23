// -----------------------------------------------------------------------------
// Link : https://nodejs.org/docs/latest-v11.x/api/async_hooks.html

/* Thuật ngũ : 
    - Không đồng bộ - thì là do gọi lại ( callback ) 
    - Cuộc gọi sẽ được gọi nhiều lần , hoặc chỉ 1 lần .
    - Tài nguyên có thể được đóng lại trước khi thực hiện gọi lại .
    - AsyncHook : ko nhận diện được là khi nào sẽ đóng lại , nhưng nó chung quy là 1 tài nguyên : resource .
    - Nếu Workers được sử dụng, mỗi luồng có async_hooks giao diện độc lập và mỗi luồng sẽ sử dụng một bộ ID async mới. 
 */


/*  Chức năng :
        - Theo dõi ( track ) các resources - tài nguyên không đồng bộ 

    Cơ chế : 
        - 


*/

/*  List function : 
    - async_hooks.createHook(callbacks) : tạo hook mới 
        callbacks <Object> Các cuộc gọi lại Hook để đăng ký
            init : khởi tạo bên trong đó 
            before : trước khi callback
            after : sau khi callback 
            destroy : phá hủy 

*/

/* Mô tả khác : 
    - Sử dụng : const async_hooks = require('async_hooks');


*/
// -----------------------------------------------------------------------------


//------------------- Demo function public API -----------------------------

const async_hooks = require('async_hooks');

// Return the ID of the current execution context.
const eid = async_hooks.executionAsyncId();

// Return the ID of the handle responsible for triggering the callback of the
// current execution scope to call.
const tid = async_hooks.triggerAsyncId();

// Create a new AsyncHook instance. All of these callbacks are optional.
const asyncHook = async_hooks.createHook({ init, before, after, destroy, promiseResolve });

// Allow callbacks of this AsyncHook instance to call. This is not an implicit
// action after running the constructor, and must be explicitly run to begin
// executing callbacks.
asyncHook.enable();

// Disable listening for new asynchronous events.
asyncHook.disable();

//
// The following are the callbacks that can be passed to createHook().
//

// init is called during object construction. The resource may not have
// completed construction when this callback runs, therefore all fields of the
// resource referenced by "asyncId" may not have been populated.
function init(asyncId, type, triggerAsyncId, resource) { }

// Before is called just before the resource's callback is called. It can be
// called 0-N times for handles (e.g. TCPWrap), and will be called exactly 1
// time for requests (e.g. FSReqCallback).
function before(asyncId) { }

// After is called just after the resource's callback has finished.
function after(asyncId) { }

// Destroy is called when an AsyncWrap instance is destroyed.
function destroy(asyncId) { }

// promiseResolve is called only for promise resources, when the
// `resolve` function passed to the `Promise` constructor is invoked
// (either directly or through other means of resolving a promise).
function promiseResolve(asyncId) { }
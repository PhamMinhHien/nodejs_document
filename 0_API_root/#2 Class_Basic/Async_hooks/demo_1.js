

// Chia async ra xử lý Cycle trong 2 class : 

// Class a => khởi tạo + hủy 
class MyAsyncCallbacks {
    init(asyncId, type, triggerAsyncId, resource) { }
    destroy(asyncId) { }
}

// Class kế thừa thực thi before and after 
class MyAddedCallbacks extends MyAsyncCallbacks {
    before(asyncId) { }
    after(asyncId) { }
}

// asyncHook => 1 new hook 
const asyncHook = async_hooks.createHook(new MyAddedCallbacks());
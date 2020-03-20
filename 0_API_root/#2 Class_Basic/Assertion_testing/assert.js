
// --------------------------------AssertionError---------------------------------------------
// Link : https://nodejs.org/docs/latest-v11.x/api/assert.html#assert_assert
/*  Chức năng : 
    - Khẳng định đó là 1 giá trị sai , 
    - Tất cả các lỗi được ném bởi assert mô-đun sẽ là các thể hiện ( instance ) của AssertionError lớp.


*/

/* List function Assert : 
    - assert(value[, message]) : khẳng định ném lỗi chuẩn
    - assert.ok(value[, message]) : cũng na ná như assert 
    
    - assert.deepEqual(actual, expected[, message]) : so sánh đôi 
        + Khẳng định - ko ném lỗi ra khi dùng với Regexp => vì nó ko nằm trong chế độ strict 
        + Nếu muốn dùng với Regexp => nên dùng assert.deepStrictEqual

    - assert.deepStrictEqual(actual, expected[, message]) : so sánh đôi trong chế độ strict 

    - assert.doesNotReject (asyncFn [, error] [, message])

    - assert.doesNotThrow (fn [, error] [, message]) : không thực sự hữu ích 

    - assert.equal(actual, expected[, message]) : trong Legacy 
    - assert.strictEqual(actual, expected[, message]) : trong Strict - kiểm tra 2 giá trị và ném lỗi 
    
    - assert.fail([message]) : ném thẳng ra message lỗi - err 
    - assert.fail(actual, expected[, message[, operator[, stackStartFn]]])
        + Nếu message => undefined thì sẽ lấy operator và giá trị làm thông báo lỗi .
    
    - assert.ifError(value)
    - assert.notDeepEqual(actual, expected[, message])
    - assert.notDeepStrictEqual(actual, expected[, message])

    - assert.throws(fn[, error][, message])
    - assert.rejects(asyncFn[, error][, message])

*/
// -----------------------------------------------------------------------------



// Demo 1 : xuất thông báo lỗi 
    const assert = require('assert'); // tạo instance 
    // Generate an AssertionError to compare the error message later:
    const { message } = new assert.AssertionError({
        actual: 1,
        expected: 2,
        operator: 'strictEqual'
    });

    // Verify error output:
    try {
        assert.strictEqual(1, 2);
    } 
    catch (err) 
    {
        assert(err instanceof assert.AssertionError);
        assert.strictEqual(err.message, message);
        assert.strictEqual(err.name, 'AssertionError [ERR_ASSERTION]');
        assert.strictEqual(err.actual, 1);
        assert.strictEqual(err.expected, 2);
        assert.strictEqual(err.code, 'ERR_ASSERTION');
        assert.strictEqual(err.operator, 'strictEqual');
        assert.strictEqual(err.generatedMessage, true);
    }


// Demo 2 : bắn lỗi trong chế độ Strict Mode 
const assert = require('assert').strict;
assert.deepEqual([[[1, 2, 3]], 4, 5], [[[1, 2, '3']], 4, 5]);





// ------------ assert(value[, message]) ------------------------
const assert = require('assert').strict;
function add (a,b){
    return a - b 
}
var assert_value = add(30,14)
assert(assert_value === 15 , " Giá trị 15 này sai ! Sẽ bị ném lỗi ! ")
// assert(assert_value === 16 , " Giá trị 15 này sai ! Sẽ bị ném lỗi ! ")

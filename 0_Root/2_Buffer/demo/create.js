/*  
    Buffer - là class con của Unit8Array , có thể sử dụng các method mở rộng từ Unit8Array.
    Chấp nhận những tệp đơn giản của Unit8Array ở bất kỳ đâu Buffer cũng được hỗ trợ .
    
    Chức năng : 
        - Đọc luồng nhị phân - binary .
        - Thao tác với file , 
        - Tương tác với TCP octet streams .
        Buffer - dùng để biểu diễn các chuỗi byte có độ dài cố định ( fixed - length) . Nó sẽ tạo ra value là class Buffer 
    
*/
const bf = require('buffer')




// --------------------------------- Example --------------------------------------------

// Tạo 1 type Buffer với điền đầy đủ mỗi bytes là value = zero-filled 
const buf1 = Buffer.alloc(10); // <Buffer 00 00 00 00 00 00 00 00 00 00>

// Tạo 1 Buffer với chiều dài 10, điền đầy đủ mỗi bytes với giá trị là `1` 
const buf2 = Buffer.alloc(10, 1); // <Buffer 01 01 01 01 01 01 01 01 01 01>

/**
    * Creates an uninitialized buffer of length 10. This is faster than calling Buffer.alloc() but the returned 
    * Buffer instance might contain old data that needs to be overwritten using fill(), write(), or other functions that fill the Buffer's contents.

    Tạo bộ đệm chưa khởi tạo có độ dài 10. Điều này nhanh hơn gọi Buffer.alloc () nhưng trả về
    Phiên bản đệm có thể chứa dữ liệu cũ cần bị ghi đè bằng cách sử dụng fill (), write () hoặc các hàm khác lấp đầy bộ đệm các nội dung.
 */
const buf3 = Buffer.allocUnsafe(10); // <Buffer 2d 10 00 00 1d 00 00 00 c0 eb> || <Buffer 01 00 00 00 00 00 00 00 64 1b> ( luôn bị biến đổi )

// Creates a Buffer containing the bytes [1, 2, 3] => tạo Buffer chứa byte trong array : [1,2,3]
const buf4 = Buffer.from([17, 18, 19]); // <Buffer 01 02 03>

// Creates a Buffer containing the bytes [1, 1, 1, 1] – the entries
// are all truncated using `(value & 255)` to fit into the range 0–255.
const buf5 = Buffer.from([257, 257.5, -255, '1']);  

// Creates a Buffer containing the UTF-8-encoded bytes for the string 'tést':
// [0x74, 0xc3, 0xa9, 0x73, 0x74] (in hexadecimal notation)
// [116, 195, 169, 115, 116] (in decimal notation)
const buf6 = Buffer.from('tést'); // <Buffer 74 c3 a9 73 74> => Mặc định là utf-8 

// Creates a Buffer containing the Latin-1 bytes [0x74, 0xe9, 0x73, 0x74].
// Tạo mới chứa định dạng bytes 
const buf7 = Buffer.from('tést', 'latin1'); // <Buffer 74 e9 73 74>

console.log(buf6)
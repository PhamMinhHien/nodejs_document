/*
	Static method: Buffer.alloc(size[, fill[, encoding]])
	Static method: Buffer.allocUnsafe(size)
	Static method: Buffer.allocUnsafeSlow(size)
	Static method: Buffer.byteLength(string[, encoding])
	Static method: Buffer.compare(buf1, buf2)
	Static method: Buffer.concat(list[, totalLength])
	Static method: Buffer.from(array)
	Static method: Buffer.from(arrayBuffer[, byteOffset[, length]])
	Static method: Buffer.from(buffer)
	Static method: Buffer.from(object[, offsetOrEncoding[, length]])
	Static method: Buffer.from(string[, encoding])
	Static method: Buffer.isBuffer(obj)
	Static method: Buffer.isEncoding(encoding)
*/

// Alloc ( allocations - có nghĩa phân bổ )
// Nếu fill được điền -> nó sẽ gọi qua .fill(fill, encoding) 
const buf = Buffer.alloc(18, 'aGVsbG8gd29ybGQ=', 'base64');
console.log(buf);

// allocUnsafe(size) : Hàm này nhanh hơn alloc - nhưng nó ko an toàn như alloc() - vì nó có thể sẽ lặp lại dữ liệu của phiên bản trước đó .
// Có 1 vấn đề tốt hơn alloc : là nó sẽ call đến 1 số func gốc để tạo khi những giá trị yêu cầu bị error => đáp ứng những yêu cầu bổ sung .
const buf_unsafe = Buffer.allocUnsafe(10);
buf_unsafe.fill(0); // được quyền gọi đến 

// from(array) : Dãy mã nhị phân 
const buf_from = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);

// byteLength() : return chiều dài + số byte 

// compare(bf1,bf2) : So sánh 2 buffer có giống nhau ko 
const bf_compare = [ Buffer.from('1234'), Buffer.from('0123') ]
console.log(bf_compare.sort(Buffer.compare));


/* concat : nối 2 buffer cùng loại lại 
	# Nối các buffer trong phiên bản List 
	# Nếu length ko được cấp - nó tự động lấy theo list length khi đã cộng 
	# Nếu length được cấp - nếu chuỗi dài , nó sẽ tự động cắt đi .
*/
const buf1 = Buffer.from('this is a test 1');
const buf2 = Buffer.from('this is text 2', 'hex');
console.log(Buffer.concat(buf1,buf2), (buf1.length + buf2.length))



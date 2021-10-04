
/* ================= Buffer ~ Mã hóa ( encode ) ký tự ================= */

// Các type encode hỗ trợ 
const type_encode = [
  "ascii", 
  "utf8", 
  "utf-8", // default
  "utf16le", // chỉ encode với 2 hay 4 byte ( nên chỉ dùng ít cho mã hóa UTF_16 hay little_endian) - dạng của tín hiệu 16 bit linear PCM 
  "ucs2", 
  "ucs-2", 
  "base64", // Mã hóa này phù hợp với URL ( vì nó cắt tất cả tab, khoảng trắng - ngắt dòng bị bỏ qua khi mã hóa )
  "latin1", 
  "binary", 
  "hex" // Hệ 16 - nó thường hay cắt bớt ký tự - vì nó chỉ lấy ký tự phù hợp hệ 16 ( 1ag => 1a )
];
const text = "This is conversation test ! ";
let arr = []

// Mã hóa 
type_encode.map(item => { 
    arr.push({
      type : item,
      encode : Buffer.from(text, item) // Mã hóa chuỗi ra theo từng type 
    })
})
console.log(arr);

// Dịch ngược lại về kiểu string - truyền đúng kiểu bị mã hóa 
arr.map(i => {
  console.log(`${i.type} : ${i.encode.toString(i.type)}`)
})

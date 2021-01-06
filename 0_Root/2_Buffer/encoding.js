// Các kiểu mã hóa khác nhau của Buffer encoding 
const type_encode = ["ascii", "utf8", "utf-8", "utf16le", "ucs2", "ucs-2", "base64", "latin1", "binary", "hex"];
const text = "This is conversation test !";
let arr = []

type_encode.map(item => { 
    arr.push({
        type : item,
        value : Buffer.from(text, item)
    })
})


console.log(arr[0].value.toString('hex')); // Prints: 68656c6c6f20776f726c64
console.log(arr[0].value.toString('base64')); // Prints: aGVsbG8gd29ybGQ=
console.log(arr)
/*

[
  {
    type: 'ascii',
    value: <Buffer 54 68 69 73 20 69 73 20 63 6f 6e 76 65 72 73 61 74 69 6f 6e 20 74 65 73 74 20 21>
  },
  {
    type: 'utf8',
    value: <Buffer 54 68 69 73 20 69 73 20 63 6f 6e 76 65 72 73 61 74 69 6f 6e 20 74 65 73 74 20 21>
  },
  {
    type: 'utf-8',
    value: <Buffer 54 68 69 73 20 69 73 20 63 6f 6e 76 65 72 73 61 74 69 6f 6e 20 74 65 73 74 20 21>
  },
  {
    type: 'utf16le',
    value: <Buffer 54 00 68 00 69 00 73 00 20 00 69 00 73 00 20 00 63 00 6f 00 6e 00 76 00 65 00 72 00 73 00 61 00 74 00 69 00 6f 00 6e 00 20 00 74 00 65 00 73 00 74 00 ... 4 more bytes>
  },
  {
    type: 'ucs2',
    value: <Buffer 54 00 68 00 69 00 73 00 20 00 69 00 73 00 20 00 63 00 6f 00 6e 00 76 00 65 00 72 00 73 00 61 00 74 00 69 00 6f 00 6e 00 20 00 74 00 65 00 73 00 74 00 ... 4 more bytes>
  },
  {
    type: 'ucs-2',
    value: <Buffer 54 00 68 00 69 00 73 00 20 00 69 00 73 00 20 00 63 00 6f 00 6e 00 76 00 65 00 72 00 73 00 61 00 74 00 69 00 6f 00 6e 00 20 00 74 00 65 00 73 00 74 00 ... 4 more bytes>
  },
  {
    type: 'base64',
    value: <Buffer 4e 18 ac 8a c7 28 9e f7 ab b1 ab 62 a2 7b 5e b2>
  },
  {
    type: 'latin1',
    value: <Buffer 54 68 69 73 20 69 73 20 63 6f 6e 76 65 72 73 61 74 69 6f 6e 20 74 65 73 74 20 21>
  },
  {
    type: 'binary',
    value: <Buffer 54 68 69 73 20 69 73 20 63 6f 6e 76 65 72 73 61 74 69 6f 6e 20 74 65 73 74 20 21>
  },
  { type: 'hex', value: <Buffer > }
]


*/
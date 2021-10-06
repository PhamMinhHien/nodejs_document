
const buf = Buffer.from([1, 2, 3]);

for (const b of buf) {
  console.log(b);
}

// Buf đang là object => thuộc dạng array => có properties support cho nó 
for (const x in buf) {
	console.log(x);
}

/* 1 số properties đặc biệt 
	parent
	offset
	copy
	toString
	equals
	inspect
	compare
	indexOf
	lastIndexOf
	includes
	fill
	write
	toJSON
	slice
	swap16
	swap32
	swap64
	toLocaleString
*/
/*
    buf[index] 
    buf.buffer 
    buf.byteOffset
    buf.compare(target[, targetStart[, targetEnd[, sourceStart[, sourceEnd]]]]) : so sánh 2 buffer 
    buf.copy(target[, targetStart[, sourceStart[, sourceEnd]]])
    buf.entries()
    buf.equals(otherBuffer) : có = nhau ko 
    buf.fill(value[, offset[, end]][, encoding])
    buf.includes(value[, byteOffset][, encoding])
    buf.indexOf(value[, byteOffset][, encoding])
    buf.keys()
    buf.lastIndexOf(value[, byteOffset][, encoding])
    buf.length
    buf.readBigInt64BE([offset])
    buf.readBigInt64LE([offset])
    buf.readBigUInt64BE([offset])
    buf.readBigUInt64LE([offset])
    buf.readDoubleBE([offset])
    buf.readDoubleLE([offset])
    buf.readFloatBE([offset])
    buf.readFloatLE([offset])
    buf.readInt8([offset])
    buf.readInt16BE([offset])
    buf.readInt16LE([offset])
    buf.readInt32BE([offset])
    buf.readInt32LE([offset])
    buf.readIntBE(offset, byteLength)
    buf.readIntLE(offset, byteLength)
    buf.readUInt8([offset])
    buf.readUInt16BE([offset])
    buf.readUInt16LE([offset])
    buf.readUInt32BE([offset])
    buf.readUInt32LE([offset])
    buf.readUIntBE(offset, byteLength)
    buf.readUIntLE(offset, byteLength)
    buf.subarray([start[, end]])
    buf.slice([start[, end]])
    buf.swap16()
    buf.swap32()
    buf.swap64()
    buf.toJSON()
    buf.toString([encoding[, start[, end]]])
    buf.values()
    buf.write(string[, offset[, length]][, encoding])
    buf.writeBigInt64BE(value[, offset])
    buf.writeBigInt64LE(value[, offset])
    buf.writeBigUInt64BE(value[, offset])
    buf.writeBigUInt64LE(value[, offset])
    buf.writeDoubleBE(value[, offset])
    buf.writeDoubleLE(value[, offset])
    buf.writeFloatBE(value[, offset])
    buf.writeFloatLE(value[, offset])
    buf.writeInt8(value[, offset])
    buf.writeInt16BE(value[, offset])
    buf.writeInt16LE(value[, offset])
    buf.writeInt32BE(value[, offset])
    buf.writeInt32LE(value[, offset])
    buf.writeIntBE(value, offset, byteLength)
    buf.writeIntLE(value, offset, byteLength)
    buf.writeUInt8(value[, offset])
    buf.writeUInt16BE(value[, offset])
    buf.writeUInt16LE(value[, offset])
    buf.writeUInt32BE(value[, offset])
    buf.writeUInt32LE(value[, offset])
    buf.writeUIntBE(value, offset, byteLength)
    buf.writeUIntLE(value, offset, byteLength)
*/

// buf[index] : Chỉ mục của buf 
const str = 'Node.js';
const buf = Buffer.allocUnsafe(str.length);

for (let i = 0; i < str.length; i++) {
  buf[i] = str.charCodeAt(i); // Xem ký tự mã hóa tại vị trí đó 
  console.log(buf[i])
}

console.log(buf.toString('utf8')); // Prints: Node.js


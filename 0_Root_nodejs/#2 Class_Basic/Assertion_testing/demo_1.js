

const assert = require('assert').strict;
function add (a,b){
    return a - b 
}
var assert_value = add(30,14)
assert(assert_value === 15 , " Giá trị 15 này sai ! Sẽ bị ném lỗi ! ")
// assert(assert_value === 16 , " Giá trị 15 này sai ! Sẽ bị ném lỗi ! ")

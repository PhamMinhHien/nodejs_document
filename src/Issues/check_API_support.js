
// -----------------------------------------------------------------------------
// Code kiểm tra xem có hỗ trợ thư viện này ko 
// -----------------------------------------------------------------------------

let crypto 
try{
    crypto = require('crypto')
    console.log("Crypto is support ! ")
}
catch(error)
{
    console.log("Crypto not support ! ")
}
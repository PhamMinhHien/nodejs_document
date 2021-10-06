var async = require('async')
var atack = []

// Callback - chỉ gọi lại nếu có callback function 
function funcone(callback) { 
    console.log("this is run 1 function ")
    
    callback(null, "this is function 1 ")
}
function functwo(callback) { 
    console.log("this is run 2 function ")
    callback(null, "this is function 2 ") 
}
function functhree(callback) { 

    callback(null, "this is function 3 ") 
}


atack.push(funcone)
atack.push(functwo)
atack.push(functhree)

async.parallel( atack , function (error , result ){
    console.log(result)
})
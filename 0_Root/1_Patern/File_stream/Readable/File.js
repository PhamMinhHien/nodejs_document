var dockfile = require('fs')

/**
 * Callback la 1 function (err , data ), bao gom 2 gia tri : 
    - err : bao loi neu co loi 
    - data : gia tri ben trong 
 */
var readFileAble = dockfile.readFile('test.txt' , 'utf-8' , function (err , data) {
    if(err)
    {
        console.log(err)
    }
    console.log(data)
 })



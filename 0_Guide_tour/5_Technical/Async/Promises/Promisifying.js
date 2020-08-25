


/*
    * Kỹ thuật này là một cách để có thể sử dụng một hàm JavaScript cổ điển nhận cuộc gọi lại và để nó trả lại 
    * một lời hứa:

*/

const fs = require('fs')

const getFile = (filename) => {
    return new Promise((resolve,reject) => {
        fs.readFile(filename , (err,data) => {
            if(err){
                reject(err)
                return
            }
            resolve(data)
        })
    })
}


getFile('/etc/passwd').then(data => console.log(data))
.catch(err => console.error(err))
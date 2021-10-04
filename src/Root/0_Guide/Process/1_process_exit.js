const express = require('express')


const app = express()

app.get('/',(req,res) => {
    res.end('Hi there. It me ')
})

const server = app.listen(3000 , () => console.log(('server ready')))

/*
    * Xây dựng process 
*/


/*
    * Bắt event khi tín hiệu SIDTERM phát ra 
    * Server thực hiện 1 cách duyên dáng 
    * 
    * Signal => là một thông báo POSIX => mà OS nhận được khi 1 events nào đó đã xảy ra .
    * SIGKILLlà tín hiệu cho biết một quá trình chấm dứt ngay lập tức và lý tưởng sẽ hành động như thế nào process.exit().

    * SIGTERM là tín hiệu cho biết một quá trình chấm dứt duyên dáng. Đó là tín hiệu được gửi từ các nhà quản 
    * lý quy trình như upstart hoặc supervisor đến nhiều người khác.
    * Bạn có thể gửi tín hiệu này từ bên trong chương trình, trong một chức năng khác:
    * process.kill(process.pid, 'SIGTERM')
    * Hoặc từ một chương trình đang chạy Node.js khác hoặc bất kỳ ứng dụng nào khác đang chạy trong hệ thống 
    * của bạn biết về quy trình PID mà bạn muốn chấm dứt.
*/
process.on('SIGTERM' , () => {
    server.close(() => {
        console.log('Process terminated ');
    })
})
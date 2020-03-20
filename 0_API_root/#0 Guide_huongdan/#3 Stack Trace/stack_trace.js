/*
    * Stack : ngăn xếp ( hộp cầu lông) - Trace : dấu vết  => dấu vết thực thi được lưu lại dưới dạng ngăn xếp 
    * 

*/

// * Tính thời gian mỗi hàm chạy được 
// const doSomething = () => console.log('test')
// const measureDoingSomething = () => {
//   console.time('doSomething()')
//   //do something, and measure the time it takes
//   doSomething()
//   console.timeEnd('doSomething()')
// }
// measureDoingSomething()


// * Tao thanh tien trinh xu ly 10ms 1 lan 
const ProgressBar = require('progress')

const bar = new ProgressBar(':percent', { total : 10 }) // 10 buoc - 100ms moi buoc - step 
/*
    * Stack trace : dấu vết ngăn xếp 
    * Là những hàm thực thi được lưu trữ lại trong quá trình thực hiện server .


*/

const timer = setInterval(() => {
    bar.tick()
    if(bar.complete){
        clearInterval(timer)
    }
},100)
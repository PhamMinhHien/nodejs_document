/* Link : https://nodejs.dev/understanding-process-nexttick
    * Mỗi khi Even Loop diễn ra trọn vẹn - tức là đi hết 1 events , chúng tôi gọi đó là một đánh dấu ( Tick )

    * Khi chúng ta truyền một hàm cho process.nextTick(), chúng ta sẽ ra lệnh cho động cơ gọi hàm này vào cuối 
    * hoạt động hiện tại, trước khi dấu lặp vòng lặp sự kiện tiếp theo bắt đầu:
 
    * Thực hiện nextTick : 
        - Đó là cách chúng ta có thể yêu cầu Tools JS xử lý một hàm không đồng bộ - async (sau hàm hiện tại) .
        - Nhưng càng sớm càng tốt, không xếp hàng nó ( xác định nó là cuối , nên ko xếp hàng nó )
 */

const bar = () => console.log('bar')

const baz = () => console.log('baz')

const foo = () => {
    // 1 
    console.log('foo') 
    // 4 
    // setTimeout(bar, 0) 
    // 5
    process.nextTick(() => {
        bar() // Khi đưa function vào bên trong nextTick => thì xác định func này chạy last 
    })
    new Promise((resolve, reject) => // if bar() last => sau bar() 
        resolve('should be right after baz, before bar')
    ).then(resolve => console.log(resolve))
    baz() // 2 
}

foo()
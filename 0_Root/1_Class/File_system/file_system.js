// -----------------------------------------------------------------------------
// Mô tả các cách code - xử lý luồng với hệ thống file ( file system )
// -----------------------------------------------------------------------------


const fs = require('fs') // yêu cầu thư viện file system 

// -----------------------------------------------------------------------------
// Demo 1 : Xử lý với với cơ chế không đồng bộ - async 
// Xóa file : chẳng hạn có file text.txt 
// -----------------------------------------------------------------------------

    /* fs.unlink('./text.txt' , (err) => {
        if(err)throw err // Xử lý trường hợp call back nếu có lỗi trước 
        console.log("Xoa file text.txt thanh cong ! ") // Nếu ko có lỗi , làm gì đó 
    }) */


// -----------------------------------------------------------------------------
// Demo 2 : Xử lý với đồng bộ cơ chế .
// 
// -----------------------------------------------------------------------------

    /* try{
        // Xoa file dong bo - sync 
        fs.unlinkSync('./text.txt', (err) => {
            // chan loi 
            if(err) throw err
            // Neu ko co err 
            console.log("Xoa file thanh cong ")
        }) 
    }
    catch(error){
        console.log(error)
    } */

// -----------------------------------------------------------------------------
// Demo 3 : Xử lý thứ tự chạy trong Async : không phải cứ nằm trước là chạy trước đúng .
// -----------------------------------------------------------------------------
    
   /*  // Hiện tượng đặt sai : stat có thể hoàn thành trước rename
    fs.rename('/tmp/hello', '/tmp/world', (err) => {
        if (err) throw err;
        console.log('renamed complete');
    });
    fs.stat('/tmp/world', (err, stats) => {
        if (err) throw err;
        console.log(`stats: ${JSON.stringify(stats)}`);
    });

    // Đặt đúng vị trí : stat chạy ko đồng bộ và đúng với rename 

    fs.rename('/tmp/hello', '/tmp/world', (err) => {
        if (err) throw err;
        // Chạy rename trước - sau đó lồng chạy stat => sau 
        fs.stat('/tmp/world', (err, stats) => {
          if (err) throw err;
          console.log(`stats: ${JSON.stringify(stats)}`);
        });
    }); */



    

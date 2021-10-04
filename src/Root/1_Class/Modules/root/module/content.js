
/*  1 - Accessing module filename  */
// console.log(require.main.filename)
// console.log(__filename)

/* 2 - Caching ( Lưu thông tin của module ) */
// console.log(require.cache);


/*
 * 3 - Cycles : 
 * Đặc điểm : Khi 1 file được require => nó được lưu các code thao tác => tốc độ chạy nhanh hơn .
 * Không áp dụng cho việc require ở những file khác nhau => những thao tác sẽ được tạo lại .
 */



/*
 * 4 - Folder as module : thêm file package.json 
 */

// { 
// 	 "name" : "some-library",
// 	 "main" : "./lib/some-library.js" 
// }


// 5 - Module scopes : 

// __dirname : đường dẫn chỉ dẫn đến folder - directory 
// __filename : đường dẫn đến tận file 
/* exports : 
		- module.exports 
		- exports.done : Áp dụng như 1 properties 
*/
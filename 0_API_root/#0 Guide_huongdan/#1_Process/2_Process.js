
/*
    * Node js nhận đối số từ command line => vì có 1 class được tích hợp sẵn là Process => hỗ trợ việc này 
    * Giống như việc viết command với set 
    * Params thường là những array [] 
*/
// demo 1 : Array command line Process 
process.argv.forEach((val,index) => {
    console.log(`${index} : ${val}`);
})

// Demo2 : Slice 2 phần tử đầu 
const args = process.argv.slice(2)
console.log(args);

/*
    * Sử dụng thư việc minimist => chứa mini list 
*/
const args = require('minimist')(process.argv.slice(2))
args['name']
// Chạy lệnh : node app.js --name=Joe
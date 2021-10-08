const fs = require('fs')


// -----------------------------------------------------------------------------
// Demo 1 : Su dung voi URL 
// -----------------------------------------------------------------------------
    const fileUrl = new URL('file:///tmp/hello') // Tạo thể hiện từ URL => tạo đường dẫn 
    console.log(fileUrl) 
    fs.readFileSync(fileUrl) // Đọc file ( đọc kiểu đồng bộ ) với đường dẫn  
 
    /*
    URL {
      href: 'file:///tmp/hello',
      origin: 'null',
      protocol: 'file:',
      username: '',
      password: '',
      host: '',
      hostname: '',
      port: '',
      pathname: '/tmp/hello',
      search: '',
      searchParams: URLSearchParams {},
      hash: ''
    }

    */


// -----------------------------------------------------------------------------
// Demo 2 : Su dung voi Buffer ( open - close file )
// -----------------------------------------------------------------------------


fs.open(Buffer.from('/open/some/file.txt') , 'r', (err,fd) => {
  if(err) throw err
  fs.close(fd , err => {
    if(err) throw err 
  })
})
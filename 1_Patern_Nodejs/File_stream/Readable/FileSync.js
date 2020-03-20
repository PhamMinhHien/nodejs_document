var dockfile = require('fs')

var readFileAble = dockfile.readFileSync('test.txt' , 'utf-8')
console.log(readFileAble)

var writeFile = dockfile.writeFileSync('test2.txt' , readFileAble)
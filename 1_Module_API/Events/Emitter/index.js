// -----------------------------------------------------------------------------
// Demo 1 : Hieu co ban Emit + On 
// -----------------------------------------------------------------------------

/* // Yeu cau API - module 
const sukien = require('events')

// Tao instance
var test = new sukien.EventEmitter();

// Su kien 
test.on('someThing' , (arg) =>{
    console.log(arg)
})

// Lang nghe su kien
test.emit('someThing' , "Hello Guy ")  */


// -----------------------------------------------------------------------------
// Su dung voi Object + Utils lib 
// -----------------------------------------------------------------------------

const sukien = require('events')
const hamchinh = require('util')

// Chu y , arrow function ko ap dung cho Object ma phai dung bang function 
var Person = function (name){
    this.name = name
}

hamchinh.inherits(Person , sukien.EventEmitter)

var a = new Person("minh")
var b = new Person("Hien")

var arr = [a,b]

arr.forEach( (person) => {
    person.on('talk' , msg => {
        console.log(person.name + " : " + msg )
    })
})


arr.forEach( (langnghe) => {
    langnghe.emit('talk' , langnghe.name)
})



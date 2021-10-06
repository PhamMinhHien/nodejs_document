/**
 * Mô tả về event loop có : basic func + setTimeout() + Promise 
 */


const bar = () => console.log("Func Timeout !");
const baz = () => console.log("Func Normal !");

function foo() {
    console.log("Start !");

    // setTimeout
    setTimeout(bar, 0)

    // Promise
    new Promise((resolve, reject) => {
        resolve("Func Promise !")
    }).then(resolve => {
        console.log(resolve);
    })

    // Function 
    baz()
}

foo()
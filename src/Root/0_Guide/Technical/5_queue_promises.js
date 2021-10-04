const bar = () => console.log('bar')

const baz = () => console.log('baz')

let promis = new Promise((resolve, reject) =>
resolve('should be right after baz, before bar')
).then(resolve => console.log(resolve))

const foo = () => {
    console.log('foo') // 1 
    setTimeout(bar, 0) // 4 
    promis // 3 
    baz() // 2 

    /*
    *   foo
    *   baz
    *   should be right after baz, before bar
    *   bar
    */
}

foo()
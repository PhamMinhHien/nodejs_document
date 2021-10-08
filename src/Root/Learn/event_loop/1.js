const bar = () => console.log("bar");
const baz = () => console.log("baz");

function foo() {
    console.log("foo");

    // setTimeout run sau 
    setTimeout(() => {
        baz()
    }, 0)

    // Function run trước setTimeout()
    bar()
}

foo()
const myFunc1 = () => {
    console.log("Func no params !");
}

const myFunc2 = (pr1 ,pr2) => {
    console.log(pr1 + pr2);
}
const a = 10;
const b = 20; 


// 1 : (callback, time)
setTimeout(myFunc1, 2000)
// 2 : (callback, time , ...args)
setTimeout(myFunc2, 2000, a ,b )
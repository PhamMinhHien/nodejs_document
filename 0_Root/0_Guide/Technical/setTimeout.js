

/*
    * Mã này chạy 1 cái gì đó => nếu nó !== arrived 
    * Nếu nó = arrived => nó sẽ bị clear 
    * 
*/
const App = {
    somethingIWait : null 
}

const interval = setInterval(() => {
    if (App.somethingIWait === 'arrived') {
        clearInterval(interval)
        return
    }
    // otherwise do things
    console.log("You are doing things !");
    
}, 100)
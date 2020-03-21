const ok = true

const isItDoneYet = new Promise((resolve,reject) => {
    if(ok === true)
    {
        resolve(ok)
        return ok
    }
})

const checkIfItsDone = () => {
    isItDoneYet
        .then(ok => {
            console.log("da thuc hien ")
        })
        .catch(err => {
            console.error(err)
        })
}
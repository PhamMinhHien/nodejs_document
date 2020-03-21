let done = true 

const IsItDoneyet = new Promise( (resolve , reject ) => {
    if(done)
    {
        const workDone = " Da lam xong nhiem vu"
        resolve(workDone)
    } else {
        const why = 'Van chua lam xong'
        reject(why)
    }
})
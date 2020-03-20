// -----------------------------------------------------------------------------
// PAth absolute + relative 
// -----------------------------------------------------------------------------
const fs = require('fs')


// Absolute 
    /* Param 
        - r : read , w : write , .... 
        - callback : 
            + fd : 

    */

    /* fs.open('./text.txt' , 'r' , (err, fd) => {
        if(err) throw err;
        fs.close(fd , (err) => {
            if(err) throw err;
        })
    }) */

// Relative : vói sử dụng process.cwd() 
    
    fs.open('text.txt','r',(err,fd) => {
        if(err) throw err

        fs.close(fd,(err) => { 
            if(err) throw err 
        });
    })


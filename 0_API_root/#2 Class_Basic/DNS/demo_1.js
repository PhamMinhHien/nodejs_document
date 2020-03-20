/**
 * Nội dung demo : check dns , sử dụng function .
 */

const dns = require('dns')

// ----- Demo 1 : lookup

dns.lookup('cms.finalboss.xyz' , (err , value , family) => {
    if(err){
        console.log(err)
        return err
    }

    console.log(value + " . Family : IPv" + family)
})

// ----- Demo 2 : resolve ( search mail infor)

// dns.resolve('cms.finalboss.xyz' , 'MX' , (err , value) => {
//     if(err){
//         console.log(err)
//         return err
//     }

//     console.log(value)
// })

// ------ Demo 3 : reverse ( tim nguoc domain name : cua google )

// dns.reverse('8.8.8.8' , (err , value) => {
//     if(err){
//         console.log(err)
//         return err
//     }

//     console.log(value)
// })
// -----------------------------------------------------------------------------
// Link : https://nodejs.org/docs/latest-v11.x/api/dns.html
/*  Chức năng : 

*/

/*  
*/

/* 


*/
// -----------------------------------------------------------------------------

const dns = require('dns')

// dns.lookup('cms.finalboss.xyz' , (err , address , family ){
//     if(err){
//         console.log(err)
//     }

//     console.log("Address " + address + " . Family IPv" + family)
// })

// dns.lookupService('8.8.8.8' , 80 , (err , hostname , service) => {
//     if(err)
//     {
//         console.log(err)
//     }

//     console.log( "Host name is : "  + hostname + ". Service is : " + service )
// })

dns.resolve("cms.finalboss.xyz" , (err , address ) => {
    if(err){
        console.log(err)
    }

    console.log('Address', address)
})

dns.setServers()
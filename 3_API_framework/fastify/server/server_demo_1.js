// -----------------------------------------------------------------------------
// Start with fastify ( create listen server ) - No async 
// -----------------------------------------------------------------------------


const fastify = require('fastify')({
    logger: true
})

/*     fastify.get('/', function(request , reply) {
        reply.send ({ hi : "there"}) // * Function no async : use reply 
    })


    fastify.listen(5000 , (err, address) => {
        if(err){
            fastify.log.error(err)
        }
        fastify.log.info(`Server listening on : ${address}`)
    }) */


// -----------------------------------------------------------------------------
// Create server with async 
// -----------------------------------------------------------------------------


fastify.get('/', async (request, reply) => {
    return { hi: "Is it" }
})

const start = async () => {
    try {
        await fastify.listen(5000) 
    }
    catch (err) {
        fastify.log.error(err)
        process.exit(1)// * Thoat tien trinh 
    }
}
start()




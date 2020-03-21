const server = http.createServer((req, res) => {
    // we can access HTTP headers
    req.on('data', chunk => {
        console.log(`Data chunk available: ${chunk}`)
    })
    req.on('end', () => {
        //end of data
    })
})

// -----------------------------------------------------------------------------
// Demo 2 
// -----------------------------------------------------------------------------

const server = http.createServer((req, res) => {
    let data = []
    req.on('data', chunk => {
        data.push(chunk)
    })
    req.on('end', () => {
        JSON.parse(data).todo // 'Buy the milk'
    })
})
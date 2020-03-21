const request = require('request')

request.post(
    'https://whatever.com/todos',
    {
        json: {
            todo: 'Buy the milk'
        }
    },
    (error, res, body) => {
        if (error) {
            console.error(error)
            return
        }
        console.log(`statusCode: ${res.statusCode}`)
        console.log(body)
    }
)
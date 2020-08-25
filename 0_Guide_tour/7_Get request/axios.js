const bodyParser = require('body-parser')

app.use(
  bodyParser.urlencoded({
    extended: true
  })
)

app.use(bodyParser.json())

app.post('/endpoint', (req, res) => {
  console.log(req.body.todo)
})
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  console.log(req.headers)
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Logger app listening at http://localhost:${port}`)
})
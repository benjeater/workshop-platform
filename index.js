const express = require('express')
const app = express()
const port = 3000
// TODO: implement ENV VARS
const baseUrl = process.env.BASE_URL

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at ${baseUrl}:${port}`)
})
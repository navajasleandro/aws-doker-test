const express = require('express')
const app = express()
const port = 8080
const destinatary = process.env.NAME

app.get('/', (req, res) => {
  res.send(`Hello ${destinatary}!`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

require('dotenv').config()
const express = require('express')
const parser = require('body-parser')
const app = express()

const port = process.env.PORT || 4000

app.use(express.static('build'))
app.use(parser.urlencoded({ extended: false }))
app.use(parser.json())

app.get('/*', (_, res) => {
  res.sendFile(__dirname + '/build/index.html')
})

app.listen(port, () => {
  console.log('server has been started on port ' + port)
})
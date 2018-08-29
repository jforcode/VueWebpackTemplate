require('dotenv').config()
const express = require('express')
const api = require('./api/index.js')

const app = express()
app.use(express.static('dist'))

app.use(require('./api/index.js'))

const port = process.env.server_port
app.listen(port, () => console.log('Server started at ' + port))

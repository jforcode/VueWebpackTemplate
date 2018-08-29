const express = require('express')
const router = express.Router()

router.use('/hello', (req, res) => res.send('Hello World'))

module.exports = router

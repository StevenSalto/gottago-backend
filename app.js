const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', async (req, res) => {
  res.send('ur not supposed to be here...')
})

module.exports = app


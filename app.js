require('dotenv').config()
const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5002

app.use(express.static('dist'))

app.get('/version', (req, res) => {
  res.send('1.3') // change this string to ensure a new version deployed
})

app.get('/health', (req, res) => {
  if (true) throw('error...  ')
  res.send('ok')
})

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`)
})

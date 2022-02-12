
const express = require('express')
const app = express()
const port = 8002

app.get('/', (req, res) => {
  res.send('Hello wWoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooorld!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

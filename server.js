const express = require('express')
const app = express()
const port = process.env.PORT || 4095

app.get('/', (req, res) => {
  return res.json({
    message: 'Bem vindo a nosso servidor teia (AKA, web server)'
  }).status(200)
})

app.listen(port, () => {
  console.log(`Hey djou, the server is running on port ${port}!`)
})
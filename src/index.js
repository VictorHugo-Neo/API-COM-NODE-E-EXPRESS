const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => { // consultado dados
    const nome = req.query.nome 
    const idade = req.query.idade
    res.json(nome,idade)

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
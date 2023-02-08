const express = require('express')
const app = express()
const port = 3000

app.get('/:nome', (req, res) => { // adicionando parametros na url
    const nome = req.params.nome // enviando o parameto
    res.json(nome)

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
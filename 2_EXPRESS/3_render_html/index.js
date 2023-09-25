//const { request, response } = require("express")
const express = require("express")
const path = require("path")

const app = express()

const caminhoBase = path.join(__dirname, 'templates')

app.get('/', (requesicao, resposta) => {
    resposta.sendFile(`${caminhoBase}/index.html`)
})
// get envia informação

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})

// http://localhost:3000
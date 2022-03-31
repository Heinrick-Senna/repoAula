const express = require('express')
const app = express()
app.use('/', (req, res) => { res.send('Alteração Simples') })
app.listen(80, console.log('Servidor Rodando'))
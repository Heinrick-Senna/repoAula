const express = require('express')
const app = express()
app.use('/', (req, res) => { res.send('Isto é um teste') })
app.listen(80, console.log('Servidor Rodando'))
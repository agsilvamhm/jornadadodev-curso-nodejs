const express = require('express')
const app = express()
const port = 3000


// criar rota padrão ou raiz

app.get('/',(req, res) => {
    res.send('Hello World!')
})

// escutar a porta

app.listen(port, () => {
    console.log(`Servidor rodando no enderenço http://localhost:${port}`)
})

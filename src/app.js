import express from 'express'

const app = express()

// indicar para o express ler o body com json
app.use(express.json())

// mock
const selecoes = [
    {id: 1 , selecao: 'Brasil', grupo:'G'},
    {id: 2 , selecao: 'Suíça', grupo:'G'},
    {id: 3 , selecao: 'Sérvia', grupo:'G'},
    {id: 4 , selecao: 'Camarões', grupo:'G'}    
]

function buscarSelecaoporId(id){
    return selecoes.find(selecao => selecao.id == Number(id))
}

function buscarIndexSelecao(id){
    return selecoes.findIndex(selecao => selecao.id === Number(id))
}


// criar rota padrão ou raiz
app.get('/',(req, res) => {
    res.send('Curso de Node JS')
})

app.get('/selecoes',(req, res) => {
    res.status(200).send(selecoes)
})

app.get('/selecoes/:id', (req, res) => {
    const objeto = buscarSelecaoporId(req.params.id)
    if (!objeto) {
        return res.status(404).json({erro: "Seleção não encontrada!"})
    } 
        
    return res.status(200).json(objeto)        
})

app.post('/selecoes',(req, res) => {
    const novaSelecao = req.body
    selecoes.push(novaSelecao)
    res.status(201).json({
        mensagem: 'Seleção cadastrada com sucesso!', 
        dados: novaSelecao
    })
})

app.delete('/selecoes/:id', (req,res) => {
    const index = buscarIndexSelecao(req.params.id)
    if (index < 0) {
        return res.status(404).json({erro:`Seleção com o id ${req.params.id} não encontrada!`})
    } 
    
    selecoes.splice(index,1)
    return res.status(200).send(`Seleção com o id ${req.params.id} excluída com sucesso!`)
})

export default app

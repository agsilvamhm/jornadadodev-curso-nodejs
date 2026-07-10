import conexao from '../database/conexao.js'
import SelecaoRepository from '../repositories/SelecaoRepository.js'

class SelecaoController {

    async index(req, res)  {
        const row = await SelecaoRepository.findall()
        res.json(row)
    }

    show(req, res) {
    const id = req.params.id
    const sql = "Select * from selecoes where id=?;"
    conexao.query(sql, id, (erro, resultado) => {
        const linha = resultado[0]
        if (erro|!linha) {
            res.status(404).json({'erro':`Seleção de id ${id} não localizado!`})
        } else {
            res.status(200).json(linha)
        }
    })
    }

    store(req, res) {
        const selecao = req.body
        const sql = "Insert into selecoes set ?;"
        conexao.query(sql, selecao, (erro, resultado) => {
            if(erro) {
                res.status(400).json({'erro': erro})
            } else {
                res.status(201).json(resultado)
            }
        })
    }

    update(req,res) {
    const id = req.params.id
    const selecao = req.body
    const sql = "Update selecoes set ? where id=?;"
    conexao.query(sql, [selecao,id], (erro, resultado) => {

        if(resultado.affectedRows === 0) {
            return res.status(404).json({erro:`Seleção com o id ${req.params.id} não encontrada!`})
        }

        if(erro) {
            res.status(400).json({'erro': erro})
        } else {
            res.status(200).json(resultado)
        }
    })
    }

    delete(req,res) {
    const id = req.params.id
    const sql = "Delete from selecoes where id=?;"
    conexao.query(sql, id, (erro, resultado) => {
        if (erro) {            
            return res.status(500).json({ 'erro': erro.message })
        }

        if(resultado.affectedRows === 0) {
            return res.status(404).json({erro:`Seleção com o id ${req.params.id} não encontrada!`})
        }
        
        res.status(200).json(resultado)              
    })   
}

}

// padrão Singleton
export default new SelecaoController()
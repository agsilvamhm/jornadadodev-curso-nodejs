import {consulta} from '../database/conexao.js'

class SelecaoRepository{
    create(selecao){
        const sql = "Insert into selecoes set ?;"
        return consulta(sql, selecao, 'Não foi possível cadastrar')
    }

    findall(){
        const sql = "Select * from selecoes;"
        return consulta(sql, 'Não foi localizado cadastro')
    }

    findById(id){
        const sql = "Select * from selecoes where id=?;"
        return consulta(sql, id, 'Não foi localizado cadastro')
    }

    update(selecao, id){
        const sql = "Update selecoes set ? where id=?;"
        return consulta(sql, [selecao, id], 'Não foi possível atualizar') 
    }

    delete(id){
        const sql = "Delete from selecoes where id=?;"
        return consulta(sql, id, 'Não foi possível apagar') 
    }
}

export default new SelecaoRepository()
import conexao from '../database/conexao.js'

class SelecaoRepository{
    create(){}

    findall(){
        const sql = "Select * from selecoes;"
        return new Promise((resolve, reject) => {
            conexao.query(sql, (erro, resultado) => {
            if(erro) return reject('Não foi possível localizar!')
            
            const row = JSON.parse(JSON.stringify(resultado))    
            return resolve(row)            
        })
    })
    }

    findById(){}

    update(){}

    delete(){}

}

export default new SelecaoRepository()
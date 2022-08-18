const moment = require('moment')
const conexao = require('../infraestrutura/conexao')
class Livro {
    adiciona(livro, res) {
        const publicacao = moment(livro.publicacao, 'YYYY-MM-DD').format('YYYY-MM-DD HH:mm:ss')
        

        
            const livroAdd = { ...livro, publicacao}

            const sql = 'INSERT INTO Livros SET ?'
            

            conexao.query(sql, livroAdd, (erro, resultados) => {
                if (erro) {
                    res.status(400).json(erro)
                } else {
                    res.status(201).json(resultados)
                }

            })


        
    }

    lista(res) {
        const sql = 'SELECT * FROM Livros'

        conexao.query(sql, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados)
            }
        })
    }
    buscaPorId(id, res) {
        const sql = `SELECT * FROM Livros WHERE id=${id}`;
     
        conexao.query(sql, (erro, resultados) => { 
            const livro = resultados[0];
            if(erro) { 
                res.status(400).json(erro);
            } else {
                res.status(200).json(livro);
            }
    
        })
    }
    altera(id, valores, res) {
 
        const sql = 'UPDATE livros SET ? WHERE id=?'
     
        conexao.query(sql, [valores, id], (erro, resultados) => { 
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados)
            }}
        )
    } 
    
    
    deleta(id, res) {
        const sql = 'DELETE FROM Livros WHERE id=?'
 
        conexao.query(sql, id, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({id})
            }
        })
    }
    
}



module.exports = new Livro

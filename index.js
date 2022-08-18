const customExpress = require('./config/customExpress')
const conexao = require('./infraestrutura/conexao')
const Tabelas = require('./infraestrutura/tabelas')
 
conexao.connect(erro => {
    if(erro) {
        console.log(erro)
    } else {
        console.log('conectado com sucesso')
        const app = customExpress()
        
        Tabelas.init(conexao)
        app.listen(9090, () => console.log('servidor rodando na porta 9090'))
        
    }
})

 
 

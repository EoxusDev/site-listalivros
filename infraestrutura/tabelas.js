class Tabelas {
    init(conexao) {
        this.conexao = conexao
        this.criarLivros()
        this.addLivros()
    }
 
    criarLivros() {
        const sql = 'CREATE TABLE IF NOT EXISTS Livros (id int NOT NULL AUTO_INCREMENT, nome varchar(50) NOT NULL, autor varchar(50), editora varchar(50) NOT NULL, publicacao date NOT NULL, idioma varchar(20) NOT NULL, preco decimal(15,2), img LONGBLOB, PRIMARY KEY(id))'
 
        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Tabela Livros criada com sucesso')
            }
        })
    } 
   addLivros(){
       const sql = 'SELECT * FROM Livros'
       this.conexao.query(sql, (erro, resultado) => {
           if(resultado.length >=10 ){
               console.log('Tabela já possui os valores')
           }
           else{
            const sql = `INSERT INTO Livros (nome, autor, editora, idioma, preco, publicacao) VALUES ?`
            const values = [
                ['As Crônicas de Nárnia', 'Clive Staples Lewis', 'WMF Martins Fontes', 'Português', '44.90', '2009/01/08'],
                ['O Hobbit', 'John Ronald Reuel Tolkien', 'HarperCollins', 'Português', '29.90', '2009/07/15'],
                ['A Arte da Guerra', 'Sun Tzu', 'Principis', 'Português', '9.90', '2019/05/02'],
                ['O Nome do Vento', 'Patrick Rothfuss', 'Arqueiro', 'Português', '45.80', '2009/07/21'],
                ['Dom Quixote', 'Michael Harrison', 'Ática', 'Português', '48.90', '2019/12/03'],
                ['A Divina Comédia', 'Dante Alighieri', 'Principis', 'Português', '30.50', '2021/03/29'],
                ['O Lobo da Estepe', 'Hermann Hesse', 'Record', 'Português', '42.50', '2020/09/16'],
                ['Outsider', 'Stephen King', 'Suma', 'Português', '45.20', '2018/07/15'],
                ['O Livro De Enoque', 'John Carth', 'Clube de Autores', 'Português', '49.90', '2020/09/14'],
                ['O Alquimista', 'Paulo Coelho', 'Paralela', 'Português', '30.30', '2017/04/05']
            ]
            this.conexao.query(sql,[values], erro => {
                if(erro) {
                    console.log(erro)
                } else {
                    console.log('Livros inseridos na tabela com sucesso')
                }
            })
           }
       })
    }
  
}
 
module.exports = new Tabelas
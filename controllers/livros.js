const Livro = require('../models/livros')

module.exports = app => {
    app.post('/livros', (req, res) => { 
        const livro = req.body
        Livro.adiciona(livro, res)
    }
    )
    app.get('/livros', (req, res) => {
        Livro.lista(res);
    });
    
    app.get('/livros/:id', (req, res) => { 
        console.log(req.params);
        res.send('OK');
    })
    app.delete('/livros/:id', (req, res) => {
        const id = parseInt(req.params.id)
 
        Livro.deleta(id, res)
    })
    app.patch('/livros/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body
     
        
        Livro.altera(id, valores, res)
    })
    

}

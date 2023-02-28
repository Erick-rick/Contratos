const express = require('express');
const app = express();
const path = require('path');
//const port = 3000;
const bodyParser = require('body-parser');
//acessar rotas
const routes = require('./routes');

app.use(express.urlencoded({extended: true}));
app.use(routes);

// usando caminho absoluto
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

//caminho de arquivos estaticos
app.use(express.static(path.resolve(__dirname, 'public')));

//TESTE
app.use(bodyParser.urlencoded({ extended: false }));
// Rota para exibir o formulário
app.get('/main', (req, res) => {
  res.render('form');
});

// Rota para processar o formulário e exibir o contrato preenchido
app.post('/contrato', (req, res) => {
  const nome = req.body.nome;
  const endereco = req.body.endereco;
  const dataNascimento = req.body.dataNascimento;

  res.render('contrato', { nome, endereco, dataNascimento });
});



app.listen(3001, () => {
  console.log('Acessar http://localhost:3001');
});

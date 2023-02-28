const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');
const contratoController = require('./src/controllers/contratoController');



// Rotas da home
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);

// Rotas de Login
//route.post('/login/register', loginController.register);

//Rotas de Contratos
//route.get('/contratoVD/index', contratoController.contratoVD);

// Rota para exibir o formulário

route.get('/main', (req, res) => {
    res.render('form');
});
  
// Rota para processar o formulário e exibir o contrato preenchido
route.post('/contrato', (req, res) => {
    const nome = req.body.nome;
    const endereco = req.body.endereco;
    const dataNascimento = req.body.dataNascimento;
  
    res.render('contrato', { nome, endereco, dataNascimento });
});



module.exports = route;
const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');
const contratoController = require('./src/controllers/contratoController');



// Rotas da home
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);

// Rotas de Login
route.get('/login/index', loginController.index);
route.post('/login/register', loginController.register);

//Rotas de Contratos
route.get('/contratoVD/index', contratoController.contratoVD);



module.exports = route;
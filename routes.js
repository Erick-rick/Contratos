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

route.get('/index', (req, res) => {
    res.render('form');
});
  
// Rota para processar o formulário e exibir o contrato preenchido
route.post('/result/resultContratoVN', (req, res) => {
    const vendedor = req.body.vendedor;
    const nomeCliente = req.body.nomeCliente;
    const dataNascimento = req.body.dataNascimento;
    const RG = req.body.RG;
    const CPF_CNPJ = req.body.CPF_CNPJ;
    const telefone = req.body.telefone;
    const cep = req.body.cep;
    const numero = req.body.numero;
    const bairro = req.body.bairro;
    const complemento = req.body.complemento;
    const cidade = req.body.cidade;
    const estado = req.body.estado;

    const modeloVeiculo = req.body.modeloVeiculo;
    const corVeiculo = req.body.corVeiculo;
    const opcionais = req.body.opcionais;
    const cortesia = req.body.cortesia;
    const obs = req.body.obs;
    const prazoEntrega = req.body.prazoEntrega;
    const valorVeiculo = req.body.valorVeiculo;
    const sinal = req.body.sinal;
    const valorTributos = req.body.valorTributos;
    const veiculoSeminovo = req.body.veiculoSeminovo;
    const avaliacao = req.body.avaliacao;
    const loja = req.body.loja;

    res.render('contrato', { vendedor, nomeCliente, endereco, dataNascimento, RG, CPF_CNPJ, telefone, cep,
                numero, bairro, complemento, cidade, estado, modeloVeiculo, corVeiculo, opcionais, 
                cortesia, obs, prazoEntrega, valorVeiculo, sinal, valorTributos, veiculoSeminovo, avaliacao, loja });
});



module.exports = route;
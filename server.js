const express = require('express');
const app = express();
const path = require('path');
//const port = 3000;
const bodyParser = require('body-parser');
//acessar rotas
const routes = require('./routes');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({extended: true}));
app.use(routes);

// usando caminho absoluto
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

//caminho de arquivos estaticos
app.use(express.static(path.resolve(__dirname, 'public')));

//home
app.get('/', (req, res) => {
  res.render('form');
});

app.get('/main', (req, res) => {
  res.render('main');
});

app.get('/users', (req, res) => {
  res.render('users');
});

app.get('/modelos', (req, res) => {
  res.render('modelos');
});

app.get('/newContrato', (req, res) => {
  res.render('newContrato');
});

app.post('/contrato', (req, res) => {
  const vendedor = req.body.vendedor;
  const nome = req.body.nome;
  const endereco = req.body.endereco;
  const dataNascimento = req.body.dataNascimento;
  const modeloVeiculo = req.body.modeloVeiculo;

  
  res.render('contrato', { nome, endereco, dataNascimento, modeloVeiculo});
});

app.post('/viewContratoVN',(req, res) => {
    const vendedor = req.body.vendedor;
    const nomeCliente = req.body.nomeCliente;
    const dataNascimento = req.body.dataNascimento;
    const RG = req.body.RG;
    const CPF_CNPJ = req.body.CPF_CNPJ;
    const telefone = req.body.telefone;
    const email = req.body.email;
    const cep = req.body.cep;
    const endereco = req.body.endereco;
    const numero = req.body.numero;
    const bairro = req.body.bairro;
    const complemento = req.body.complemento;
    const cidade = req.body.cidade;
    const estado = req.body.estado;

    const modeloVeiculo = req.body.modeloVeiculo;
    const anoModelo = req.body.anoModelo;
    const corVeiculo = req.body.corVeiculo;
    const opcionais = req.body.opcionais;
    const cortesia = req.body.cortesia;
    const obs = req.body.obs;
    const prazoEntrega = req.body.prazoEntrega;
    const valorVeiculo = req.body.valorVeiculo;
    const sinal = req.body.sinal;
    const valorTributos = req.body.valorTributos;
    const veiculoSeminovo = req.body.veiculoSeminovo;
    const dataAvaliacao = req.body.dataAvaliacao;
    const avaliacao = req.body.avaliacao;
    const loja = req.body.loja;

  res.render('viewContratoVN',  { vendedor, nomeCliente, endereco, dataNascimento, RG, CPF_CNPJ, telefone, email, cep,
    numero, bairro, complemento, cidade, estado, modeloVeiculo, corVeiculo, opcionais, anoModelo, 
    cortesia, obs, prazoEntrega, valorVeiculo, sinal, valorTributos, veiculoSeminovo, dataAvaliacao, avaliacao, loja });
})

app.post('/resultContratoVN', (req, res) => {
    const vendedor = req.body.vendedor;
    const nomeCliente = req.body.nomeCliente;
    const dataNascimento = req.body.dataNascimento;
    const RG = req.body.rg;
    const CPF_CNPJ = req.body.CPF_CNPJ;
    const telefone = req.body.telefone;
    const cep = req.body.cep;
    const endereco = req.body.endereco;

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

    res.render('resultContratoVN', { vendedor, nomeCliente, endereco, dataNascimento, RG, CPF_CNPJ, telefone, cep,
                numero, bairro, complemento, cidade, estado, modeloVeiculo, corVeiculo, opcionais, 
                cortesia, obs, prazoEntrega, valorVeiculo, sinal, valorTributos, veiculoSeminovo, avaliacao, loja });
});


app.listen(3001, () => {
  console.log('Acessar http://localhost:3001');
});

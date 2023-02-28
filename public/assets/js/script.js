
//function(){
// var vendedor = document.getElementById("vendedor");
// var cliente = document.getElementById("cliente");
// var rg = document.getElementById("RG");
// var cpf_cnpj = document.getElementById("CPF_CNPJ");
// var telefone = document.getElementById("telefone");
//  var email = document.getElementById("email");
//  var cep = document.getElementById("CEP");
// var endereco = document.getElementById("endereco");
//  var bairro = document.getElementById("bairro");
//  var complemento = document.getElementById("complemento");
// var cidade = document.getElementById("cidade");
//  var estado = document.getElementById("estado");

// var contrato;

function save() {

    resultContrato = JSON.parse(window.localStorage.getItem('contratoItem')) ?? [];

    var contrato = {
        vendedor: document.getElementById("vendedor"),
        cliente: document.getElementById("cliente"),
        rg: document.getElementById("RG"),
        cpf_cnpj: document.getElementById("CPF_CNPJ"),
        telefone: document.getElementById("telefone"),
        email: document.getElementById("email"),
        cep: document.getElementById("CEP"),
        endereco: document.getElementById("endereco"),
        numero: document.getElementById("numero"),
        bairro: document.getElementById("bairro"),
        complemento: document.getElementById("complemento"),
        cidade: document.getElementById("cidade"),
        estado: document.getElementById("estado")

    }
    resultContrato.push(contrato);

    localStorage.setItem('contratoItem', JSON.stringify(resultContrato));

    allDate()
}



exports.index = (req, res) => {
    res.render('contratoVD');
};

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

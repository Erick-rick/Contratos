function Contrato(body){
    this.body = body;
    this.erros = [];
    this.contrato = null;

}

//const ContatoModel = mongoose.model('Contato', ContatoSchema);

Contrato.prototype.register = async function() {
    this.valida();
    if(this.errors.length > 0) return;
    //this.contrato = await ContratoModel.create(this.body);
  };
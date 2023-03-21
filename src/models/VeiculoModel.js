const mongoose = require('mongoose');
const validator = require('validator');


const VeiculoSchema = new mongoose.Schema({
  nome: { type: String, require: true },
  versao: { type:String, require: true },
  criadoEm: { type: Date, default: Date.now }
});

const VeiculoModel = mongoose.model('Modelos', VeiculoModel);

function Veiculo(body){
  this.body= body;
  this.errors = [];
  this.veiculo = null;

}

Veiculo.prototype.register = async function(){
  this.valida();
  if(this.errors.length > 0 ) return;
  this.veiculo = await VeiculoModel.create(this.body);
};

Veiculo.prototype.valida = function() {
  if(!this.body.nome) this.errors.push('Nome é um campo obrigatório.');

};

Veiculo.prototype.cleanUp = function() {
  for(const key in this.body){
    if(typeof this.body[key] !== 'string'){
      this.body[key] = '';
    }
  }

  this.body = {
    nome: this.body.nome,
    versao: this.body.versao
  };
};

Veiculo.prototype.edit = async function(id){
  if(typeof id !== 'string') return;
  this.valida();
  if(this.errors.length > 0 ) return;
  this.veiculo = await VeiculoModel.findByIdAndUpdate(id, this.body, { new: true });
};

Veiculo.buscarPorId = async function(id) {
  if(typeof id !== 'string') return;
  const veiculo = await VeiculoModel.findById(id);
  return veiculo;
};

Veiculo.buscarVeiculo = async function (){
  const veiculo = await VeiculoModel.find()
    .sort({criadoEm: -1 });
  return veiculo;
};

Veiculo.delete = async function(id){
  if(typeof id !== 'string') return;
  const veiculo = await VeiculoModel.findByIdAndDelete({_id: id});
  return veiculo;
};

module.exports = Veiculo;




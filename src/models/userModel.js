const mongoose = require('mongoose');
const validator = require('validator');

const UserSchema = new mongoose.Schema({
  nome: {type: String, require: true},
  email: {type: String, require: true },
  cpf: {type: String, require: true}
});

const UserModel = mongoose.model('User', UserModel);

function User(body){
  this.body = body;
  this.errors = [];
  this.user = null;
}

User.prototype.register = async function(){
  this.valida();
  if(this.errors.length > 0 )return;
  this.user = await UserModel.create(this.body);
};



const Login = require('../models/LoginModel');

exports.index = (req, res) =>{
  if(req.session.user) return res.render('login-logado');
  return res.render('login');
};

//cadastro login
exports.register = async function(req, res){
    try {
        const login = new Login(req.body);
        await login.register();

        if(login.errors.length > 0){
            req.flash('erros', login.errors);
            req.session.save(function(){
                return res.redirect('back');
            });
            return;
        }

        req.flash('sucess', 'Seu usuario foi criado com sucesso!');
        req.session.save(function(){
            return res.redirect('back');
        });

        return res.send(login.errors);

    } catch (error) {
        console.log(e);
        return res.render('404');
    }
};

exports.login = async function(req, res){
  try {
    const login = new Login(req.body);
    await login.login();

    if(login.errors.length > 0){
      req.flash('errors', login.errors);
      req.session.save(function(){
        return res.redirect('back');
      });
      return;
    }

    req.flash('sucesso', 'Você logou com sucesso!');
    req.session.user = login.user;
    req.session.savae(function() {
      return res.redirect('back');
    });
  } catch(e){
    console.log(e);
    return res.render('404');
  }
};

exports.logout = function(req, res ){
  req.session.destroy();
  res.redirect('/');
};

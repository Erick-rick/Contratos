exports.paginaInicial = (req, res) => {
  res.render('index', {
    titulo:''
  });
  return;
};

exports.trataPost = (req, res) => {
  res.send('teste ');
}

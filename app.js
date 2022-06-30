var express = require('express');
var consign = require('consign');
var app = express();

app.set('view engine', 'ejs');
app.set('views', './src/view');

consign()
  .include('src/routes')
  .then('src/model')
  .then('src/controller')
  .into(app);

app.listen(3000, function(){
  console.log('APP rodando na porta 3000');
});

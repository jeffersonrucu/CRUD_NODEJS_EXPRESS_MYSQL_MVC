(async () => {

  const express = require('express');
  const bodyParser = require("body-parser")
  const consign = require('consign');
  const path = require('path');
  const app = express();
  const database = require('./db');

  try {
    const resultado = await database.sync();
    console.log(resultado);
  } catch (error) {
    console.log(error);
  }


  app.use(bodyParser.urlencoded({
    extended: true
  }));

  app.set('view engine', 'ejs');
  app.set('views', './src/view');

  app.use(express.static(path.join(__dirname, './src/view')));

  consign()
    .include('src/routes')
    .then('src/model')
    .then('src/controller')
    .into(app);

  app.listen(3000, function () {
    console.log('APP rodando na porta 3000');
  });
})();

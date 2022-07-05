(async () => {
  const express = require('express');
  const bodyParser = require("body-parser")
  const path = require('path');
  const consign = require('consign');

  const database = require('./db');
  const product = require('./src/model/Product');
  const client = require('./src/model/Client');
  
  const app = express();

  try {
    // init database
    await database.sync();
    
    // init url encoded
    app.use(bodyParser.urlencoded({
      extended: true
    })); 

    // set view enginer
    app.set('view engine', 'ejs');
    app.set('views', './src/view');

    // set public 
    app.use(express.static(path.join(__dirname, './src/view')));

    // init routes and controllers
    consign()
      .include('src/routes')
      .then('src/controller')
      .into(app);

    // start routes 
    app.listen(3000, function () {
      console.log('APP rodando na porta 3000');
    });

  } catch (error) {
    console.log(error);
  }

})();

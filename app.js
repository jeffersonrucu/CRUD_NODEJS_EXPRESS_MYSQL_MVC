const express = require('express')
const app = express();
const port = 3000;

const dashboard = require('./Routes/dashboard');

app.use('/dashboard', dashboard);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
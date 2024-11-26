const express = require('express');
const bodyParser = require('body-parser')

const HttpStatus = require('./src/enums/status-code.enum');
const AppConfig = require('./src/configuration/app.configuration');

const app = express();

app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.json({
    message: 'Welcome to express',
    status: HttpStatus.OK
  });
})

app.listen(AppConfig.port, () => {
  console.log(`🚀 Server is running at http://localhost:${AppConfig.port}`)
});
'use strict'

const express = require('express'); //pacote para facilitar a criação de api web em node.js
const bodyParser = require('body-parser'); // transformar as informações do body em json
const app = express(); 
const indexRoute = require('./routes/index.js');
const transacaoRoute = require('./routes/transacao-route.js')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', indexRoute); //habilita as rotas criadas do caminho de indexRoute
app.use('/transacao', transacaoRoute);

module.exports = app;
'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const transacaoRoute = require ('./routes/transacao-routes.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/transacao', transacaoRoute)

module.exports = app;

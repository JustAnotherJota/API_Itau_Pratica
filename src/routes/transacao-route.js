'use strict'

const express = require('express');
const router = express.Router();
const transacaoController = require('../controllers/transacao-controller');

router.get('/', transacaoController.NomeMetodoGet);

module.exports = router;
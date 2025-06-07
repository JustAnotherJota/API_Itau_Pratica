'use strict'

const express = require('express');
const router = express.Router();
const transacaoController = require('../controllers/transacao-controller');

router.get('/', transacaoController.NomeMetodoGet);
router.post('/novaTransacao', transacaoController.post);
router.get('/Estatistica', transacaoController.getEstatistica);

module.exports = router;
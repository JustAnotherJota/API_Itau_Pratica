'use strict'

 const express = require ('express');
 const router = express.Router();
 const transacaoController = require('../controllers/transacao-controller');

 router.get('/consultando_transacao', transacaoController.getEstatistica);
 router.post('/criando_transacao', transacaoController.post);
 router.delete('/deletando_transacao', transacaoController.deletando);

 module.exports = router;
'use strict'

var Transacao = require('../models/transacao');
var transacaoService = require('../services/transacao-service');
var listaTransacao = require('../repositories/transacao-repository')

exports.post = (request, response) => {
    var novaTransacao = new Transacao (request.body.valor, request.body.DataHora);
    novaTransacao.dataHora = novaTransacao.dataHora /1000 ;
    listaTransacao.push(novaTransacao);
    response.status(200).send({
        message:`Valor: ${novaTransacao.valor}, Hora:${novaTransacao.dataHora}`
    })
}

exports.getEstatistica = (require,response) => {
    response.status(200).send({
        count: transacaoService.Count(),
        sum: transacaoService.Soma(),
        avg: transacaoService.Avg(),
        max: transacaoService.Max(),
        min: transacaoService.Min()
    })
}

exports.deletando = (request, response) => {
    transacaoService.DeletandoTransacao();
    response.status(200).send({
        message: 'Todas as informações foram apagadas com sucesso'
    })
}
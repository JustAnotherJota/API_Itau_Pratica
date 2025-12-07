'use strict'

var Transacao = require('../models/transacao');
var transacaoService = require('../services/transacao-service');
var listaTransacao = require('../repositories/transacao-repository')

exports.post = (request, response) => {
    var novaTransacao = new Transacao (request.body.valor, request.body.DataHora);
    novaTransacao.dataHora = novaTransacao.dataHora /1000 ;
    listaTransacao.push(novaTransacao);
    debug('Resposta em JSON' + JSON.stringify(novaTransacao));
    response.status(200).send({
        message:`Valor: ${novaTransacao.valor}, Hora:${novaTransacao.dataHora}`
    })
    //console.log("Lista", listaTransacao);
}

exports.getEstatistica = (require,response) => {
    response.status(200).send({
        count: transacaoService.count(),
        sum: transacaoService.soma(),
        avg: transacaoService.avg(),
        max: transacaoService.max(),
        min: transacaoService.min()
    })
    //console.log("valores", transacaoService.count(), transacaoService.soma(), transacaoService.avg(), transacaoService.max(), transacaoService.min()); 
}

exports.deletando = (request, response) => {
    transacaoService.deletandoTransacao();
    console.log(transacaoService.deletandoTransacao());
    response.status(200).send({
        message: 'Todas as informações foram apagadas com sucesso'
    })
}
'use strict'

const debug = require('debug')('api:requisicaoPost');
var Transacao = require('../models/transacao.js');
const operacoes = require('../services/operacoes-service.js');
const transacaoRepository = require('../repositories/transacao-repository.js');
// const {listaTransacao} = require('../repositories/transacao-repository.js');
// const deletando = require('../repositories/transacao-repository.js');

exports.NomeMetodoGet = (request, response) => {
    response.status(200).send({
        teste:'Deu certo!!'
    })
}

exports.post = (request, response) => {
        var novaTransacao = new Transacao(request.body.valor);
        transacaoRepository.listaTransacao.push(novaTransacao);
        debug('Resposta em JSON' + JSON.stringify(novaTransacao));
        response.status(200).send({
        message: `Valor: ${novaTransacao.valor}, Data: ${novaTransacao.dataHora}, Id: ${novaTransacao.id}`
    })
}

exports.getEstatistica = (request, response) => {
    response.status(200).send({
        count: operacoes.contadorId(),
        sum: operacoes.soma(),
        avg: operacoes.average(),
        min: operacoes.minimo(),
        max: operacoes.maximo()
    })
}

exports.delete = (request, response) => {
    transacaoRepository.deletando(request.params.id);
    response.status(200).send({
        message: `Requisição feita`
    })
}
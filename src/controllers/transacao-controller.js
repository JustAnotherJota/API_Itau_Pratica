'use strict'

const debug = require('debug')('api:requisicaoPost');
var Transacao = require('../models/transacao.js');

var listaTransacao = [];

exports.NomeMetodoGet = (request, response) => {
    response.status(200).send({
        teste:'Deu certo!!'
    })
}

exports.get = (request, response) => {
    response.status(200).send({

    })
}


exports.post = (request, response) => {
        var novaTransacao = new Transacao(request.body.valor);
        listaTransacao.push(novaTransacao);
        debug('Resposta em JSON' + JSON.stringify(novaTransacao));
        response.status(200).send({
        message: `Valor: ${novaTransacao.valor}, Data: ${novaTransacao.dataHora}, Id: ${novaTransacao.id}`
    })
}


exports.getEstatistica = (request, response) => {
    response.status(200).send({
        count: contadorId(),
        sum: soma(),
        avg: average(),
        min: minimo(),
        max: maximo()
    })
}


function contadorId(){
    var contadorId = 0;
    listaTransacao.forEach(function (transacao){
        if(transacao.id > 0)
            contadorId++;
    })
    return contadorId; 
}

function soma(){
    var somaTransacao = 0;

    listaTransacao.forEach(transacao => somaTransacao += transacao.valor);
        return somaTransacao;

}

function average(){
    var average = 0;
    const numbTransacoes = contadorId();
        if (numbTransacoes === 0)
            return average;

    listaTransacao.forEach(transacao => average += transacao.valor)
    return average/numbTransacoes;
}

function minimo(){
    var minimo = 0;
    if(listaTransacao.length === 0)
        return minimo;

    listaTransacao.forEach(transacao => {
        if (minimo === 0)
            minimo = transacao.valor;

        if (minimo > transacao.valor)
            minimo = transacao.valor;
    })
    return minimo;
}

function maximo(){
    var maximo = 0;
    if (listaTransacao.length === 0)
        return maximo;

    listaTransacao.forEach(transacao => {
        if(maximo === 0)
            maximo = transacao.valor;

        if(maximo < transacao.valor)
            maximo = transacao.valor;
    })
    return maximo;
}
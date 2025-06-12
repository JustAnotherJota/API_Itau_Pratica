'use strict'

const { listaTransacao } = require('../repositories/transacao-repository.js');

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

module.exports = { contadorId, soma, average, minimo, maximo};
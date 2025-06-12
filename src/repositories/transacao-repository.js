'use strict'

const debug = require('debug')('api:repo');

var listaTransacao = [];

function deletando (id) {

    var objctDeletado = "Sem Objeto Deletado";

    var indexTransacao = listaTransacao.findIndex(transacao => {
        if (transacao.id == id){ 
        objctDeletado = transacao;
        return true
        }
        return false
    })

    listaTransacao.splice(indexTransacao, 1);
    debug('transacao deletada foi a' + JSON.stringify(objctDeletado));
}

module.exports = {listaTransacao, deletando};
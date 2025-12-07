'use strict'

const listaTransacao = require("../repositories/transacao-repository");

//ver transaçoes e suas estatisticas dos ultimos 60 segundos; 


function horarioAtual() {
    const horarioAtual = Date.now()/1000; 
    return horarioAtual;
}

function ultimosSegundos () {
    const ultimosSegundos = horarioAtual() - 60;
    //console.log(ultimosSegundos);
    return ultimosSegundos;
}

function count(){
    var countTransacao = 0;
    
    listaTransacao.forEach(transacao =>
    {
        if(transacao.dataHora >= ultimosSegundos() && transacao.dataHora <= horarioAtual())
             countTransacao ++;
    }
     )
     return countTransacao;
    }

function soma(){
    var somaTransacao = 0;

    listaTransacao.forEach(transacao => {
        if(transacao.dataHora >= ultimosSegundos() && transacao.dataHora <= horarioAtual())
            somaTransacao += transacao.valor;
    })
    return somaTransacao;
}

function avg()
{
    var avg = 0;
    if (count() === 0)
        return avg;
    return avg = soma()/count();
}

function max(){
    var maximo = 0;
    if(listaTransacao.length > 0){
        listaTransacao.forEach(transacao => {
            if(transacao.dataHora >= ultimosSegundos() && transacao.dataHora <= horarioAtual()){
                if(maximo === 0)
                    maximo = transacao.valor;
                
                if (maximo < transacao.valor)
                    maximo = transacao.valor;
            }
        })
        return maximo; 
    }
    return maximo;
}

function min(){
    var minimo = 0;
        if(listaTransacao.length > 0) {
            listaTransacao.forEach(transacao => {
                if(transacao.dataHora >= ultimosSegundos() && transacao.dataHora <= horarioAtual()){

                    if(minimo === 0)
                        minimo = transacao.valor; 
        
                    if(minimo > transacao.valor) // se o min for maior, ele já não é mais o mínimo 
                        minimo = transacao.valor;
            }
        })
        return minimo;
    }
  return minimo;
}

function deletandoTransacao(){
    listaTransacao.length = 0;
    return `tamanho da lista: ${listaTransacao.length}`;
}

module.exports = {count, soma, avg, max, min, deletandoTransacao}; 
'use strict'

const listaTransacao = require("../repositories/transacao-repository");

//ver transaçoes e suas estatisticas dos ultimos 60 segundos; 

function HorarioAtual() {
    const horarioAtual = Date.now()/1000;
    return horarioAtual;
}

function UltimosSegundos () {
    const ultimosSegundos = HorarioAtual() - 60;
    return ultimosSegundos;
}

function Count(){
    var countTransacao = 0;
    
    listaTransacao.forEach(transacao =>
    {
        if(transacao.dataHora >= UltimosSegundos() && transacao.dataHora <= HorarioAtual())
             countTransacao ++;
    }
     )
     return countTransacao;
    }

function Soma(){
    var somaTransacao = 0;

    listaTransacao.forEach(transacao => {
        if(transacao.dataHora >= UltimosSegundos() && transacao.dataHora <= HorarioAtual())
            somaTransacao += transacao.valor;
    })
    return somaTransacao;
}

function Avg()
{
    var average = 0;
    if (Count() === 0)
        return average;
    return average = Soma()/Count();
}

function Max(){
    var maximo = 0;
    if(listaTransacao.length > 0){
        listaTransacao.forEach(transacao => {
            if(transacao.dataHora >= UltimosSegundos() && transacao.dataHora <= HorarioAtual()){
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

function Min(){
    var minimo = 0;
        if(listaTransacao.length > 0) {
            listaTransacao.forEach(transacao => {
                if(transacao.dataHora >= UltimosSegundos() && transacao.dataHora <= HorarioAtual()){

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

function DeletandoTransacao(){
    listaTransacao.length = 0;
    return `tamanho da lista: ${listaTransacao.length}`;
}

module.exports = {Count, Soma, Avg, Max, Min, DeletandoTransacao}; 
let identityManual = 1;

class Transacao {

    constructor(valor)
    {
        this.valor = valor;
        this.dataHora = new Date();
        this.id = identityManual++; 
    }
}

module.exports = Transacao;
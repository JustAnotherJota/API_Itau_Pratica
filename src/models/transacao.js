class Transacao {
    constructor (valor, dataHora)
    {
        this.valor = valor; 
        this.dataHora = new Date(dataHora);
    }
}

module.exports = Transacao;
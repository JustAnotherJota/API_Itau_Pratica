let identityManual = 1;

class transacao {

    constructor(valor, dataHora, id)
    {
        this.valor = valor;
        this.dataHora = new Date();
        this.id = identityManual++; 
    }
}
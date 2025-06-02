'use strict'

const http = require('http');  // require é para importarmos um pacote do node_modules ou um arquivo 
const debug = require('debug')('api:server'); // aqui temos o módulo para validar o funcionamento de uma função por exemplo, imprimindo a mensagem de qual porta está sendo acessada; Pesquisando melhor, também vi que ele só aparece quando invoco ele no terminal, diferente do console.log que ao executar a função em que está, vou ter sempre o retorno dela   
const normalizePort = require ('normalize-port'); // o normalizeport verifica se a porta é valida, podendo traduzir para aplicação a maneira que ela chegou, sendo como int ou string;
const app = require('../src/app'); // importando arquivo local, para o app iniciar na porta disponível

const port = normalizePort(process.env.PORT || 3000) //validando a porta
app.set('port', port);  //setando a porta

const server = http.createServer(app); // criando a porta no servidor obtido pela const port 

server.listen(port);
server.on('error', OnError);
server.on('listening', OnListening);

function OnError(error){ 
    if(error.syscall !== 'listen'){
        throw error;
    }
    const bind = typeof port === 'string' ? 'Pipe' + port: 'Port' + port;
        switch (error.code){
            case 'EACCES':
                console.error(bind + 'requires elevated privileges');
                process.exit(1);
                break;
            case 'EADDRINUSE':
                console.error(bind + 'is already in use');
                console.log(bind, '', error.syscall);
                process.exit(1);
                break;
            default:
                throw error;
        }
}

function OnListening(){
    const addr = server.address(); //alocando o endereço do servidor
    const bind = typeof addr === 'string' ? 'pipe ' + addr: 'port ' + addr.port; //tradução do addr para exibir como string, validando se é named pipe ou porta que sendo utilizada
    debug('Listening on: ' + bind); //debugando
}
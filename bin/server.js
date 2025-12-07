const http = require ('http');
const normalizePort = require ('normalize-port');
const app = require ('../src/app.js');

const port = normalizePort(process.env.PORT || 3000);
app.set('port', port);
 
const server = http.createServer(app);

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
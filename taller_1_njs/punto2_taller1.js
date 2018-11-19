
var http = require('http');

var requests = 1;//

var server = http.createServer(function(req, res){
    console.log('Petición hecha' + req.url);
    res.writeHead(200, {'content-Type': 'text/html'} );
    res.write('Peticiones recibidas :'+ requests);
    Res.end();
}
);

server.listen(8080);
console.log('Servidor funcionando en el puerto 8080');
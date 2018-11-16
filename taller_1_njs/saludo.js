var http = require("http");

function onRequest(request, response){
    response.writheHead(200, {"content-Type": "text/html"});
    response.write("Hola mundo");
    response.end();

}


function saludar_2sec(){
    console.log("Hola ya pasaron 2 segundos !");
}

setInterval(saludar_2sec, 1500);

var server = http.createServer(onRequest);

server.listen(8080);


/*/Cargar el modulo HTTP
var http = require('http');
 
// Configurar una respuesta HTTP para todas las peticiones
function onRequest(request, response) {
  console.log("Peticion Recibida.");
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("Hola Carolina Ochoa");
  response.end();
}
 
var server = http.createServer(onRequest);
 
// Escuchar al puerto 8080
server.listen(8080);
 
// Poner un mensaje en la consola
console.log("Servidor funcionando en http://localhost:8080/");*/

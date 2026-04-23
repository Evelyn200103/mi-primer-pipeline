// Función principal: suma dos números
function sumar(a, b) {
  return a + b;
}

// Servidor web minimalista
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hola Mundo desde mi Pipeline!\n');
});

server.listen(3000, () => console.log('Servidor corriendo en puerto 3000'));

module.exports = { sumar };

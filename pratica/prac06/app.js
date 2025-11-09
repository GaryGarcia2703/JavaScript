// server.js
import { createServer } from 'node:http';
// define parâmetros para o servidor

const server = createServer((req, res) => {
res.writeHead(200, { 'Content-Type': 'text/plain' });
res.end('Hello World!\n');
});

// Inicia um servidor local na porta 3000
server.listen(3000, '127.0.0.1', () => {
console.log('Listening on 127.0.0.1:3000');

});
// Rodar no console com `node server.js`
const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
    let paginas = ''

    if (request.url === '/') {
        paginas = 'index.html';
    } else if (request.url === '/botafogo') {
        paginas = 'botafogo.html'
    } else if (request.url === '/guitarra') {
        paginas = 'guitarra.html'
    } else {
        paginas = 'erro.html'
    }
    if (fs.existsSync(paginas)) {
        fs.readFile(paginas, (erro, dados) => {
            if (erro) {
                throw erro;
            }
            else {
                response.write(dados);
                response.end();
            }
        })


    }
});

server.listen(3010, ()=> {console.log("Servidor está rodando, escutando a porta 3010")});

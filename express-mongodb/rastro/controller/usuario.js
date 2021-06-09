const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

module.exports = (app) => {
    const UsuarioController = {

        cadastrar(request, response) {  
            console.log(`request.body: ${request.body}`);
            console.log(request.body);

            mongoose.connect(
                app.constantes.db.connection,
                app.constantes.db.connectionParams
            )
            .then(() => {

                const Usuario = app.model.usuario;
                const usuario = new Usuario(request.body);

                console.log(`usuario ANTES:`);
                console.log(usuario);

                usuario.senha = bcrypt.hashSync(usuario.senha, 12);

                console.log(`usuario DEPOIS:`);
                console.log(usuario);

                Usuario.create(usuario)
                .then((usuarioCriado) => {
                    console.log(`Usuario criado com sucesso:`);
                    console.log(usuarioCriado);
                    response.status(200).send(usuarioCriado);
                })
                .catch((erro) => {
                    console.log(`Erro ao cadastrar o usuario: ${erro}`);
                    console.log(erro);
                    response.status(500).send(`Erro ao cadastrar o usuario: ${erro}`);    
                });
                
            })
            .catch((erro) => {
                console.log(`Erro ao conectar no banco MongoDB: ${erro}`);
                console.log(erro);
                response.status(500).send(`Erro ao conectar no banco MongoDB: ${erro}`);
            });

        }
    }
    return UsuarioController
}
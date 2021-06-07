const mongoose = require('mongoose');

module.exports = (app) => {

    const RastreadorController = {

        cadastrar(request, response) {

            console.log('Rota /rastreador chamada...');
            console.log(`request.body: ${request.body}`);
            console.log(request.body);

            const Rastreador = app.model.rastreador;

            const rastreador = new Rastreador(request.body);

            mongoose.connect(
                'mongodb://localhost:27017/rastro-dev',
                {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                    useCreateIndex: true
                }
            )
                .then(
                    (resultado) => {

                        const resultadoCreate = Rastreador.create(rastreador)

                            .then((resultado) => {
                                console.log(`resultado do then: ${resultado} | constructor: ${resultado.constructor.name}`);
                                console.log(resultado);
                                console.log(`Rastreador ${rastreador.codigoRastreador} cadastrado com sucesso.`);
                                mongoose.disconnect();
                                response.status(200).send(resultado);
                            })
                            .catch((erro) => {
                                console.log(`erro do create: ${erro} | constructor: ${erro.constructor.name}`);
                                console.log(erro);
                                console.log(`Erro ao cadastrar o Rastreador: ${erro}`);
                                mongoose.disconnect();
                                response.status(500).send(`Erro ao cadastrar o Rastreador: ${erro}`);
                            });
                    }
                ).catch(
                    (erro) => {
                        console.log(`erro do connection: ${erro} | constructor: ${erro.constructor.name}`);
                        console.log(erro);
                        console.log(`Erro ao conectar no banco MongoDB: ${erro}`);
                        response.status(500).send(`Erro ao conectar no banco MongoDB: ${erro}`);
                    }
                );
        }
    }
    return RastreadorController;
}


        
        

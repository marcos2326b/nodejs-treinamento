const mongoose = require ('mongoose')

module.exports = app => {

    const Rastreamentocontroller = {

        cadastrar(request, response){
            console.log('Rota /rastreamento chamada...');
            console.log(`request.body: ${request.body}`);
            console.log(request.body);

            const Rastreamento = app.model.rastreamento;
            const Rastreador = app.model.rastreador;

            const rastreamento = new Rastreamento(request.body)

            if (rastreamento.dataHora == null){
                rastreamento.dataHora = new Date();  // colocar a hora e a data que esta no servidor //
            }

            

            mongoose.connect(
            'mongodb://localhost:27017/rastro-dev',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true
            })
             .then (() => {

                Rastreador.find({codigoRastreador: rastreamento.codigoRastreador})
                .then((listaRastreador) => {
                    if(listaRastreador.length > 0){
                        Rastreamento.create(rastreamento)
                        .then((resultado) => {
                        console.log(resultado)
                        mongoose.disconnect();
                        response.status(200).send(resultado);
                        })
       
                       .catch ((erro) => {
                        console.log(erro)
                        mongoose.disconnect();
                        response.status(500).send(`Erro ao cadastrar o rastreamento${erro}`); 
                       });
                    } else {
                        console.log(`Rastreador de codigoRastreador: ${rastreamento.codigoRastreador} não localizado no cadastro.`);
                        mongoose.disconnect();
                        response.status(404).send(`Rastreador de codigoRastreador: ${rastreamento.codigoRastreador} não localizado no cadastro.`);
                    }
                })
                .catch(() =>{
                    console.log(`Erro ao localizar o cadastrar do Rastreador: ${erro}`);
                    console.log(erro);
                    mongoose.disconnect();
                    response.status(500).send(`Erro ao localizar o cadastrar do Rastreador: ${erro}`);
                });
            }).catch((erro) => {
                console.log(`Erro ao conectar no banco MongoDB: ${erro}`);
                console.log(erro);
                response.status(500).send(`Erro ao conectar no banco MongoDB: ${erro}`);
            });
         
        },
        buscarPorCodigoRastreador(request, response){
            console.log('Rota GET/rastramento/:codigoRastreador? chamada...')
            console.log(`request.params:${request.params}`);
            console.log(request.params)

            if(request.params.codigoRastreador == "" || request.params.codigoRastreador == null ){
                response.status(400).send('Parametro codigoRastreador invalido');
            } else {
                
                mongoose.connect(
                    'mongodb://localhost:27017/rastro-dev',
                    {
                        useNewUrlParser: true,
                        useUnifiedTopology: true,
                        useCreateIndex: true
                    }    
                )

            

                .then(() => {
                    const Rastreamento = app.model.rastreamento;

                    Rastreamento.find( { codigoRastreador: request.params.codigoRastreador } )
                    .then((listaRastreamentos) => {
                        console.log(listaRastreamentos);
                        mongoose.disconnect();
                        response.status(200).send(listaRastreamentos);
                    })

                    .catch((erro) => {
                        console.log(`Erro ao realizar a consulta de rastreamentos: ${erro}`);
                        console.log(erro);
                        mongoose.disconnect();
                        response.status(500).send(`Erro ao realizar a consulta de rastreamentos: ${erro}`);
                    });
    
                })

    
                .catch((erro) => {
                    console.log(`Erro ao conectar no banco MongoDB: ${erro}`);
                    console.log(erro);
                    response.status(500).send(`Erro ao conectar no banco MongoDB: ${erro}`);
                });
            }   
        }      

    }
    return Rastreamentocontroller;
}

module.exports = (app) => {
    app.get(
        "/",
        (request,response) => {
            console.log("rota principal chamada....")
            response.send('servidor rodando esta OK')
        }
    );
    app.post(
        '/rastreador',
        app.controller.rastreador.cadastrar
    );    

    app.put(
        '/rastreador',
        app.controller.rastreador.alterar
    );

    app.delete(
        '/rastreador/:codigoRastreador',
        app.controller.rastreador.excluir
    )
}
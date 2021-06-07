module.exports = (app) => {

    app.post('/rastreamento', app.controller.rastreamento.cadastrar);


    app.get('/rastreamento/:codigoRastreador', app.controller.rastreamento.buscarPorCodigoRastreador);
}
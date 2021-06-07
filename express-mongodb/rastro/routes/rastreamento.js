module.exports = (app) => {

    app.post('/rastreamento', app.controller.rastreamento.cadastrar);
    
}
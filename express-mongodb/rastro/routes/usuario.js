module.exports = (app) => {
    app.post(
        '/usuario',
        app.controller.usuario.cadastrar
    )
}
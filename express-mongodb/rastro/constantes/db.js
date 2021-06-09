module.exports = (app) => {
    const constantesDb = {
        connection :'mongodb://localhost:27017/rastro-dev',
        connectionParams:  {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        }
    }
    return constantesDb
}
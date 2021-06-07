const mongoose = require('mongoose');
const rastreador = require('../routes/rastreador');

module.exports = (app) => {

const Schema = mongoose.Schema;

const rastreadorSchema = Schema(
    {
        codigoRastreador: { type: String, required: true, index: { unique: true } },
        placaVeiculo: { type: String, required: true },
        cpfCliente: { type: String, required: true }
    }
);
console.log(`rastreadorSchema: ${typeof(rastreadorSchema)} | constructor: ${rastreadorSchema.constructor.name}`);
const Rastreador = mongoose.model('rastreadores',rastreadorSchema);
console.log(`Rastreador: ${typeof(Rastreador)} | constructor: ${Rastreador.constructor.name}`);

return Rastreador

}
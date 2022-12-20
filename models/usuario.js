const { model, Schema } = require('mongoose');

const UsuarioSchema = Schema({
    nombre: {
        type: String,
    },
    telefono: {
        type: String,
    },
    correo: {
        type: String
    },
    cedula: {
        type : String
    },
    sala_id: {
        type: Schema.Types.ObjectId,
        ref: 'Sala'
    }

});


module.exports = model('Usuarios', UsuarioSchema)

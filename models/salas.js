const { Schema, model } = require('mongoose');


const SalaSchema = Schema({
    nombre: {
        type: String,
    },
    precio: {
        type: String,
    },
 
});


module.exports = model('Sala', SalaSchema)

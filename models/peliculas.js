const { Schema, model } = require('mongoose');


const PeliculasSchema = Schema({
    nombre: {
        type: String,
    }
});


module.exports = model('Pelicula', PeliculasSchema)

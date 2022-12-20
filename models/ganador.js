const { Schema, model } = require('mongoose');


const GanadorSchema = Schema({
    datos: {
        type: Array,
    }
});


module.exports = model('Ganador', GanadorSchema)

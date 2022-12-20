const { response, request } = require('express')
const Peliculas = require('../models/peliculas')


const getPeliculas = async ( req = request, res = response) => {

    const peliculasDB = await Peliculas.find();

    res.json({
        ok: true,
        peliculasDB
    })

}

const postPeliculas = async (req = request, res = response) => {
    
    const { ...data } = req.body;

    const peliculasDB = new Peliculas(data);

    await peliculasDB.save();

    if (!peliculasDB.nombre) {
        res.status(400).json({
            peliculasDB
        })
    }

    res.json({
        ok: true,
        peliculasDB
    })

}

module.exports = {
    getPeliculas,
    postPeliculas
}
const { request, response } = require("express");
const Ganador = require('../models/ganador')


const getGanador = async (req = request, res = response) => {

    const ganadorDB = await Ganador.find();

    res.json({
        ok: true,
        ganadorDB
    })

}


const postGanador = async (req = request, res = response) => {

    const data = req.body;

    const ganadorDB = new Ganador(data);

    await ganadorDB.save();

    res.json({
        ok: true,
        ganadorDB
    })

}


module.exports = {
    getGanador,
    postGanador
}
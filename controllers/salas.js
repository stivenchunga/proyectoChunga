const { response, request } = require('express')
const Salas = require('../models/salas')

const getSalas = async (req , res = response) => {

    const salas = await Salas.find()

    const total = await Salas.countDocuments();

    res.json({
        total,
        ok: true,
        salas
    })

}

const getSalasId = async (req = request , res = response) => {

    const { id } = req.params

    const salaDB = await Salas.findById(id);

    res.json({
        ok:true,
        sala: salaDB
    })

}


const postSalas = async (req, res = response) => {
 
    const { ...data } = req.body;

    console.log(data);

    const SalasDB = new Salas(data);

    await SalasDB.save();

    if (!SalasDB.nombre || !SalasDB.precio) {
        res.status(400).json({
            ok:false,
            msg:'Error campo nombre y precio vacios'
        })
    }

    res.json({
        ok: true,
        SalasDB
    })
    
}

const deleteSalas = async (req = request , res = response) => {

    const { id } = req.params;

    console.log(req.params)

    const SalaDB = await Salas.findByIdAndDelete(id);

    res.json({
        ok: true,
        msg:"Sala eliminada",
        sala: SalaDB
    })

}

module.exports = {
    getSalas,
    postSalas,
    deleteSalas,
    getSalasId
}
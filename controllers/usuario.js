const Usuario = require('../models/usuario')
const { response, request } = require("express");


const getUsuarios = async (req = request , res = response) => {

    const { id } = req.query;
    console.log(id)

    let usuariosDB;

    if (id) {
        usuariosDB = await Usuario.find({sala_id:id});
    } else {
        usuariosDB = await Usuario.find();
    }


    const total = await Usuario.countDocuments();

    console.log(usuariosDB)

    res.json({
        total: total,
        ok: true,
        usuario: usuariosDB
    })

}

const getUsuarioId = async (req = request, res = response) => {

    const { id } = req.params;

    console.log(id)
    
    const UsuariosId = await Usuario.findById(id);

    res.json( {
        ok: true,
        usuario: UsuariosId
    })

}

const postUsuarios = async (req = request, res = response) => {
    
    const { ...data } = req.body;

    const usuarioDB =  new Usuario(data);

    await usuarioDB.save();

    if (!usuarioDB.nombre || !usuarioDB.telefono || !usuarioDB.correo || !usuarioDB.cedula) {
        res.status(400).json({
            ok: false,
            msg:'Error, nombre, telefono, correo o cedula estan vacios'
        })
    }

    res.json({
        ok: true,
        usuarioDB
    })

}



// const getUsuarios = async (req = request , res = response) => {

// }

// const getUsuarios = async (req = request , res = response) => {

// }


module.exports = {
    getUsuarios,
    postUsuarios,
    getUsuarioId
}
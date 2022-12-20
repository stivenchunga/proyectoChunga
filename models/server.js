const express = require('express');
const cors = require('cors');
const {dbConnection} = require('../database/config')

class Server{


    constructor() {
        this.app = express();
        this.port = process.env.Port;
        this.path = {
            salas: '/api/salas',
            usuarios: '/api/usuarios',
            peliculas: '/api/peliculas',
            ganador:'/api/ganador'
        }
        
        this.conectionDB();
     
        this.middlewares();

        this.routes();
    }

    middlewares() {
        
        //Cors
        this.app.use(cors());

        //Parceo y lectura
        this.app.use(express.json())

        //Directorio publico
        this.app.use(express.static('public'))
    }

    async conectionDB() {
        await dbConnection();
    }

    routes() {
        this.app.use(this.path.salas, require('../routes/salas'))
        this.app.use(this.path.usuarios, require('../routes/usuarios'))
        this.app.use(this.path.peliculas, require('../routes/peliculas'))
        this.app.use(this.path.ganador, require('../routes/ganador'))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Listen and port ${this.port}`)
        })
    }

}


module.exports = Server;
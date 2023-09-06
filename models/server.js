const express = require('express')
const cors = require('cors')

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.formulariosPath = '/api/v1/formularios';

        //Middlewares
        this.middlewares();

        // Rutas de la applicación
        this.routes();
    }

    middlewares() {
        // CORS
        this.app.use( cors() );

        // Read & Parse body input
        this.app.use( express.json() );

        // Rutas de la App
        this.app.use( express.static('public') );
    }

    routes() {
        this.app.use( this.formulariosPath, require('../routes/crud-form.route') );
    }

    listener() {
        this.app.listen( this.port, () =>{
            console.log(`Servidor corriendo en el puerto:  ${ this.port }`)
        })
    }
}

module.exports = Server;
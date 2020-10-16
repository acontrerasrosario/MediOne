const http         = require('http');
const express      = require('express');
const morgan       = require('morgan');
const path         = require('path');
const main_path    = process.cwd();
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUI    = require('swagger-ui-express')
const cors         = require('cors')

const webServerConfig = require('../config/WebServer.config');
const pacienteRoute   = require('../routes/paciente.route');

const swaggerOptions = {
    swaggerDefinition: {
        info : {
            title      : "MediOne API",
            description: "Información MediOne API",
            contact    : {
                name: "Angel Contreras"
            },
            servers: ["http://localhost:3000/","http://3.228.6.152:3000/"]
        }
    },
    // ['../routes/*.js']
    apis: ["./routes/*.js"]
};


let httpServer;

function initialize(){
    return new Promise((resolve,reject) =>{
        const app = express();

        app.use(morgan('combined')); // Combines logging info from request and response
        app.use(express.json()); // understand json request
        app.use(express.urlencoded({extended:true})); // understand json request
        // app.use(function(req, res, next) {
        //     res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
        //     res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT, PATCH, OPTIONS");
        //     res.header("Access-Control-Allow-Headers", "Content-Type, api_key, Authorization");

        //     next();
        // });

        const swaggerDocs = swaggerJsDoc(swaggerOptions);
        app.use('/api-docs', swaggerUI.serve,swaggerUI.setup(swaggerDocs));

        // app.get('/*', async (req, res) => {
        //     res.redirect('/api-docs'); 
        // });

        // API'S
        app.use('/api/paciente', pacienteRoute);

        httpServer = http.createServer(app);

        httpServer.listen(webServerConfig.port).on('listening',() => {
            console.log(`Server on port ${webServerConfig.port}`);
            resolve();
        }).on('error', err => {
            reject(err);
        });
    });
}

function close(){
    return new Promise((resolve,reject) => {
        httpServer.close((err) => {
            if (err) {
                reject(err);
                return;
            }
            resolve();
        });
    });
}

module.exports.initialize = initialize;
module.exports.close      = close;
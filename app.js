/**
 * APPLICATION Main file.
 */
/**
 * importing app dependencies
 */
const express = require ('express');
const cors = require ('cors');
const mongoose = require ('mongoose');


/**
 * importing app internal modules
 */
const config = require ('./config/index');
const router = require ( './routes/index');
const dbConection = require ( './helpers/database.connection');


//Instanciating Express App
const app = express ();


/**
 * Application settings
 */
app.use (express.json ());
app.use (express.urlencoded ( {extended: true} ));
app.use(cors());



/**
 * Application middlewares
 */
//generating token
//const generatingToken = (req, res, next) => {

//}



/**
 * Application APIs
 */
 app.use('/', router);

//Launching express server
app.listen (config.port, (err) => {
    if ( !err) {
        return `Express server listening on http://localhost:${config.port}`;
    }else {
        return  'Error starting Express Application!'
    };
});
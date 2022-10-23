/**
 * Application routings
 */
//Importing express routing object
const express = require ( 'express' );
const expressRouter = express.Router();

/**
 * Importing controllers
 */
//const passwordGenerator = require ( '../controllers/generate.password.controller');
const tokenGenerator = require ( '../controllers/generate.token.controller');
const mpesaRegisterUrls = require ( '../controllers/mpesaRegisterUrls');
const paymentConfirmation = require ( '../controllers/payment_confirmation');
const paymentValidation = require ( '../controllers/payment_validation');
const simulateTransaction = require ( '../controllers/transaction');
const transactionRecords = require('../controllers/fetch_transaction_records');

//Auth controls
const register = require ('../controllers/auth/register');
const login = require ('../controllers/auth/login');

//Routes
expressRouter.post ( '/register/urls', tokenGenerator, mpesaRegisterUrls);
expressRouter.post ( '/confirmation', paymentConfirmation);
expressRouter.post ('/validation', paymentValidation);
expressRouter.get ('/similate', tokenGenerator, simulateTransaction);
expressRouter.get ('/records', transactionRecords);

//Auth routes
expressRouter.post ('/auth/register', register);

module.exports = expressRouter;
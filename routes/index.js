/**
 * Application routings
 */
//Importing express routing object
const express = require ( 'express' );
const expressRouter = express.Router();
const { check } = require ('express-validator');

/**
 * Importing controllers and middlewares
 */
//const passwordGenerator = require ( '../controllers/generate.password.controller');
const tokenGenerator = require ( '../controllers/generate.token.controller');
const mpesaRegisterUrls = require ( '../controllers/mpesaRegisterUrls');
const paymentConfirmation = require ( '../controllers/payment_confirmation');
const paymentValidation = require ( '../controllers/payment_validation');
const simulateTransaction = require ( '../controllers/transaction');
const transactionRecords = require('../controllers/fetch_transaction_records');

const verifyToken = require ( '../middleware/tokenVerification');

//Auth controls
const register = require ('../controllers/auth/register');
const login = require ('../controllers/auth/login');

//importing pages:
const dashboard = require ( '../controllers/pages/dashboard');

//Routes
expressRouter.post ( '/register/urls', tokenGenerator, mpesaRegisterUrls);
expressRouter.post ( '/confirmation', paymentConfirmation);
expressRouter.post ('/validation', paymentValidation);
expressRouter.get ('/similate', tokenGenerator, simulateTransaction);
expressRouter.get ('/records', transactionRecords);

//Auth routes
expressRouter.post ('/auth/register', 
    check ('phoneNumber').not ().trim ().isEmpty ().isLength ({min:10, max: 10}).escape ().withMessage ("Phone number is incorrect!"),
    check ('firstName').not ().trim ().isEmpty ().isLength ( {min: 3, max: 16}).escape ().withMessage ("First name to not meet the requirements!"),
    check ('lastName').not ().trim ().isEmpty ().isLength ( {min: 3, max: 16}).escape ().withMessage ("Last name to not meet the requirements!"),
    check ('email').trim ().isEmail ().normalizeEmail ().escape ().withMessage (" email is incorrect!"),
    check ('password').not ().trim ().isEmpty ().isStrongPassword ().escape ().withMessage ("Password do not meet the requirements!")
, register);

expressRouter.post ( '/auth/login', 
    check ('phoneNumber').not ().trim ().isEmpty ().isLength ({min:10, max: 10}).escape ().withMessage ("Phone number is incorrect!"),
    check ('password').not ().trim ().isEmpty ().isStrongPassword ().escape ().withMessage ("Password do not meet the requirements!") 
, login)

//Protect pages:
expressRouter.get ( '/protected/dashboard', verifyToken ,dashboard);


module.exports = expressRouter;
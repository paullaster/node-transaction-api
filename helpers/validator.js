/**
 *  Input valudation
 */
// Dependecies
const { body } = require ('express-validator');

//Validator function:
const validator = (req, res, next ) => {
    console.log (req.body);
};

//Export validation function
module.exports = validator;
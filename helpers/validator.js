/**
 *  Input valudation
 */
// Dependecies
const { check } = require ('express-validator');

//Validator function:
const validator = (req, res, next ) => {
    check ('phoneNumber').not ().trim ().isEmpty ().isLength ({min:9, max: 13}).escape ().withMessage ("Phone number is incorrect!"),
    check ('firstName').not ().trim ().isEmpty ().isLength ( {min: 3, max: 16}).escape ().withMessage ("First name to not meet the requirements!"),
    check ('lastName').not ().trim ().isEmpty ().isLength ( {min: 3, max: 16}).escape ().withMessage ("Last name to not meet the requirements!"),
    check ('email').not ().trim ().isEmpty ().isEmail ().normalizeEmail ().escape ().withMessage (" email is incorrect!"),
    check ('password').not ().trim ().isEmpty ().isStrongPassword ().escape ().withMessage ("Password do not meet the requirements!")
    
    //call the next control
    next ();
    
};

//Export validation function
module.exports = validator;
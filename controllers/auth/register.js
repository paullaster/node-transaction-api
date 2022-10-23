/**
 * Registration controller.
 */
//Dependecies modules
const { validationResult } = require ('express-validator')


//Registration func:
const register = (req, res, next) => {
    res
    .status(200)
    .json ( {
        body: req.body,
    })
};

//Exporting Registration func:
module.exports = register;

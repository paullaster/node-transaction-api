/**
 * Registration controller.
 */
//Dependecies modules
const { validationResult } = require ('express-validator');
const bcrypt = require ('bcrypt');


//Registration func:
const register = (req, res, next) => {

    const errors = validationResult (req);
    
    if (!(errors.isEmpty ())) {
        return (
            res
           .status (404)
           .json ( {
               errors: errors.array (),
           })
       );
    };

    const {phoneNumber, firstName, lastName, email, password} = req.body;
    let mobile = `+254${phoneNumber.slice (1, phoneNumber.length)}`;

    //Hashing password
    bcrypt.hash (password, 12)
    .then ( (hash) => {
        res
        .status(200)
        .json ( {
             phoneNumber: mobile,
             firstName: firstName,
             lastName: lastName,
             email: email,
             password: hash
         });
    })
    .catch ( (error) => {
        error.message = 'Error hashing password';
        res
        .status (500)
        .json ( {
            error: error.message,
        });
    });
};

//Exporting Registration func:
module.exports = register;

/**
 * Registration controller.
 */
//Dependecies modules
const { validationResult } = require ('express-validator');
const bcrypt = require ('bcrypt');

//Internal modules:
const newUser = require ('../../db/models/usersModel');

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
        let user = new newUser ({
            phoneNumber: mobile,
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: hash
        });
        //saving user to database
        user.save ()
        .then ( (details) => {
            res
            .status (201)
            .json ( {
                message: `User ${details.firstName} ${details.lastName} with ID: ${details._id} was saved successfully!.`,
            });
        })
        .catch ( (error) => {
            //error.message = 'Error while saving user!'
            res
            .status(500)
            .json ( {
                error: error.message,
                code: error.code
            } );
            });
    })
    .catch ( (error) => {
        //error.message = 'Error hashing password';
        res
        .status (500)
        .json ( {
            error: error.message,
            code: error.code
        });
    });
};

//Exporting Registration func:
module.exports = register;

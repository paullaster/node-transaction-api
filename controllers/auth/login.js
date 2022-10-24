/**
 * Loging in:
 */
//Dependecies
const bcrypt = require ('bcrypt');
const { validationResult } = require ('express-validator');
const jsonwebtoken = require ( 'jsonwebtoken');

//Internal modules:
const user = require ('../../db/models/usersModel');
const {tokenSecret} = require ( '../../config/index');

//Login middleware
const login = (req, res) => {

    const errors = validationResult (req);
    
    //Checking if sanitization and validation passed!
    if ( !(errors.isEmpty ())) {
        return (
            res
            .status (404)
            .json ( {
                errors: errors.array (),
            })
        );
    };

    // Finding if user exist in the database
    const { phoneNumber, password } = req.body;
    //Transforming phoneNumber
    let mobile = `+254${phoneNumber.slice ( 1, phoneNumber.length)}`;
    user.findOne ( {
        phoneNumber: mobile,
    })
    .then ( (data) => {
        //Checking if the password is correct:
        bcrypt.compare (password, data.password)
        .then ( ( response) => {

            if ( !response ) {
                return (
                    res
                    .status (400)
                    .json ( {
                        message: 'Incorrect password!',
                    })
                );
            };

            // Creating token:
            let token = jsonwebtoken.sign ( {id:data._id}, tokenSecret, {
                algorithm: 'HS512',
                expiresIn: '3600s'
            });
            res
            .status (201)
            .header (
                {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token,
                    'Accept-Language': 'en-US,en;q=0.9'
                }
            )
            .json ( {
                phoneNumber: data.phoneNumber,
                name: data.firstName + ' ' + data.lastName,
                accessToken: token,
            });
        })
        .catch ( (error) => {
            res
            .status (500)
            .json ( {
                error: error.message,
                code: error.code,
            });
        });
    })
    .catch ( (error) => {
        res
        .status (500)
        .json ( {
            error: error.message,
            code: error.code,
        });
    });
};
//Export Login middleware
module.exports = login;
/**
 * Token verification middleware:
 */
//Dependecies
const jsonwebtoken = require ( 'jsonwebtoken');

//Internal dependencies
const { tokenSecret } = require ( '../config/index');

//Verification middleware
const verifyToken = (req, res, next) => {
    //Getting token from the Authorization header
    const token = req.header ('Authorization');

    // Verify if the request authorization header is set:
    if ( !token) {
        return (
            res 
            .status (404)
            .json ({
                message: 'Access Denied!',
            })
        );
    };
    //Authorization token value:
    const authorizationToken = token.slice ( 7, token.length);
    //Verify token:
    jsonwebtoken.verify (authorizationToken, tokenSecret, {
        algorithms: 'HS512'
    }, (error, verified) => {
        if ( error ) {
            return (
                res 
                .status( 404 )
                .json ( {
                    error: error.message,
                })
            );
        };
        // setting sharing verified user to the next middleware:
        req.user = verified;
        next ();
    })
};

//Export verfication middleware
module.exports = verifyToken;
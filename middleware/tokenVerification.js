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
    const verified = jsonwebtoken.verify (authorizationToken, tokenSecret, {
        algorithms: 'HS512'
    })
    res
    .status (200)
    .json ( {
        message: authorizationToken,
    })

};

//Export verfication middleware
module.exports = verifyToken;
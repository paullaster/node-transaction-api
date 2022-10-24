/**
 * Dashboard controller:
 */
//Dependecies

//Internal dependencies
const User = require ( '../../db/models/usersModel');


//Dashboard controller
const dashboard = (req, res) => {
    //Authorized user:
    const userID = req.user.id;

    //Finding user from the database:
    User.findOne ( {
        _id: userID
    })
    .then ( (data) => {
        //Sending user data to the client:
        res
        .status(200)
        .json ({
            phoneNumber: data.phoneNumber,
            email: data.email,
            dateJoined: data.dateJoined,
            firstName: data.firstName,
            lastName: data.lastName,
            id: data._id,
        });
    })
    .catch ( (error) => {
        // Handling error in case any:
        res 
        .status (500)
        .json ( {
            error: error.message,
        })
    });
};

//Export dashboard controller
module.exports = dashboard;
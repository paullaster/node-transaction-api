/**
 * Dashboard controller:
 */
//Dependecies

//Internal dependencies

//Dashboard controller
const dashboard = (req, res) => {
    res
    .status(200)
    .json ({
        message: 'Dashboard',
    })
};

//Export dashboard controller
module.exports = dashboard;
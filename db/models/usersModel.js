/**
 * User Model
 */
//Dependecies
const mongoose = require ('mongoose');

//Internal modules
const UserSchema = require ( '../schema/usersSchema');

//Exporting user model
module.exports = (' Users', UserSchema);
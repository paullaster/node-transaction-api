/**
 * Fetching trasaction details stored in the data
 */
//Dependecies
const mongoose = require ( 'mongoose' );
// Internal dependencies
const Transaction = require ( '../db/models/transaction_model');

//Middleware function
const fetchTrasactionDetails = (req, res) => {
    Transaction.find({})
    .then ( (data) => {
        res
        .status (201)
        .send (data);
    } ) 
    .catch (err => { 
        res
        .status (500)
        .send (err.message);
      } );
}

//Export trasaction details
module.exports = fetchTrasactionDetails;
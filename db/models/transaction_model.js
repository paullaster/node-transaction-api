/**
 * Transaction Model
 */
//Dependecies
const mongoose = require ( 'mongoose' );


//Importing transaction schema
const TransactionSchema = require ( '../schema/transactionSchema');

//Exporting transaction model
module.exports = mongoose.model ( 'Transaction', TransactionSchema );
/**
 * Transaction schemas
 */
//Dependecies
const mongoose = require ( 'mongoose' );

//Schema instance
const Schema = mongoose.Schema;


//Defined transaction schema
const TransactionSchema = new Schema ( {
    transacType: String,
    transactionID: String,
    transactionTime: Date,
    Amount: String,
    OrganizationBalance: String,
    phoneNumber: String,
    firstName: String,
    lasteName: String,

});


// Exporting transaction schema
module.exports = TransactionSchema;

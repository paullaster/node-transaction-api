/**
 * Confirmation of mpesa transactions
 */

//Internal dependencies
const Transaction = require ( '../db/models/transaction_model');

const mpesaPaymentConfirmation = (req, res) => {
    //console.log ('...................................Confirmation ......................');
    let year =  (req.body.TransTime).slice(0, 4);
    let month = (req.body.TransTime).slice(4, 6);
    let day = (req.body.TransTime).slice(6, 8);
    let hourString = (req.body.TransTime).slice(8, 10);
    let hour = parseInt(hourString) + 3;
    let minute = (req.body.TransTime).slice(10, 12);
    let second = (req.body.TransTime).slice(12, 14);

    let transactionDate = (`${year}-${month}-${day} ${hour}:${minute}:${second}`);

    let transaction = new Transaction ( {
        transacType: req.body.TransactionType,
        transactionID: req.body.TransID,
        transactionTime: transactionDate,
        Amount: req.body.TransAmount,
        OrganizationBalance: req.body.OrgAccountBalance,
        phoneNumber: req.body.MSISDN,
        firstName: req.body.FirstName,
        lasteName: req.body.LastName,
    });
    transaction.save ()
    .then ( (transaction) => {
        res
        .status(201)
        .json ({
            message: 'Transaction saved to the database successfully',
            id: transaction._id
        });
    })
    .catch ( (err) => {
        res
        .status(500)
        .json (
            err.massage
        );
    })
};

//export mpesaPaymentConfirmation
module.exports = mpesaPaymentConfirmation;
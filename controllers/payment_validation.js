/**
 * Payment validation
 */

const mpesaValidation = (req, res) => {
 //console.log ( '.........................................Validation.........................................');
 //console.log (req.body);
    res
        .status (200)
        .json({
            "ResultCode": 0,
            "ResultDesc": "Accepted"
        })
};


module.exports = mpesaValidation;
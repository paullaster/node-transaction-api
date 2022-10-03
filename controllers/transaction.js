/**
 * Simulate mpesa transaction
 */

//Dependecies
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

//Internal dependencies
const config = require ('../config/index');


const mpesaTransactions = (req, res, next) => {
    const url = 'https://sandbox.safaricom.co.ke/mpesa/c2b/v1/simulate';
    //console.log(req.accessToken);
    const auth = 'Bearer ' + req.accessToken;
    const headers = {
        'Authorization': auth,
        'Content-Type': 'application/json',
    };
    const body = JSON.stringify ( {
        "ShortCode": config.shortCode,
        "CommandID": "CustomerBuyGoodsOnline",
        "Amount": "1",
        "Msisdn": "254708374149",
    });

    fetch (
        url,
        {
            method: 'POST',
            headers: headers,
            body: body,
        }
    )
    .then ( (response) => {
        return response.json();
    })
    .then ( (data) => {
        //console.log(data);
        res.json (data);
    })
    .catch ( (err) => {
        res.send (err.message);
    });
};

//Export transaction
module.exports = mpesaTransactions;
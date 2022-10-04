//Dependecies
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));


const { response } = require('express');
//Importing internal dependencies
const config = require ( '../config/index');
//const accessToken = require ( './generate.token.controller');

const mpesaRegisterUrls = (req, res) => {
    const access_token = req.accessToken;
    const url = 'https://api.safaricom.co.ke/mpesa/c2b/v2/registerurl';
    const headers = {
        Authorization: 'Bearer ' + access_token,
        'Content-Type': 'application/json'
    };
    let body = {
            "ShortCode":`${config.shortCode}`,
            "ResponseType": "Completed",
            "ConfirmationURL": "https://node-transaction-api.herokuapp.com/confirmation",
            "ValidationURL": "https://node-transaction-api.herokuapp.com/validation",
    };

    fetch (
        url,
        {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(body),
        }
    )
    .then ( (response) => {
        return response.json ();
    })
    .then ( (data) => {
        res.json (data);
        //res.send ({message : data})
    })
    .catch ( (err) => {
        console.error(err.message);
    }); 
};


//exporting  transaction
module.exports = mpesaRegisterUrls;
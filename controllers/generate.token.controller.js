//Dependecies
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

//app internal module
const config = require ( '../config/index');

const consumerKey = config.consumerKey;
const secretKey = config.secretKey;

//Generate token
const generateToken = (req, res, next) => {
    const url = 'https://api.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials';
    const token = Buffer.from ( consumerKey + ':' + secretKey).toString ('base64');
    const auth = 'Basic ' + token;
    const headers = {
        Authorization: auth,

    };

    fetch (
        url,
        {
            method: 'GET',
            headers: headers,
        }
    )
    .then ( (response) => {
        return response.json ();
    })
    .then ( (dataObj) =>{
        //console.log(dataObj);
        let accessToken = dataObj.access_token;
        req.accessToken = accessToken;
        //res.send(accessToken);
        next ();
    })
    .catch ( (err) =>{
        console.error (err.message);
    });

};

module.exports = generateToken;
//Dependecies
const datetime = require ('node-datetime');


//Geeting environment variable
const config = require ('../config/index');

const passKey = config.passKey;
const shortCode = config.shortCode;

const newPassword = () => {
    const dt = datetime.create();
    const formattedDate = dt.format('YmdHMS');

    const passwordString = `${shortCode}${passKey}${formattedDate}`;
    const base64EncodedPasswordString = Buffer.from (passwordString).toString ('base64');
    return base64EncodedPasswordString;
};

const generatePassowrd = (req, res) => {
    console.log({
        status: 'success',
        message: 'Request sent successfully',
        passowrd: newPassword (),
    });
   res.send ( newPassword ());
};

module.exports = generatePassowrd;
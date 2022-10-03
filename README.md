# node_mpesa_api
this repo implements the Daraja mpesa api using node.js

## Clonning this App
`git clone https://github.com/paullaster/node_mpesa_api`

## Setting up the environment to run this app on your development server
### Requirements 
  1. Node.js version >= 14
  https://node.js.org/en/
  check version with this command `node -v`

  2. NPM  version >= 6
  It is shipped with Node.js. When you install Node.js it will be installed.
  check version with this command `npm -v`



  After successfully cloning this app and setting the environment, You'll do the following steps;

### 1. Installing dependencies in the `package.json` file in th root directory
use `npm install --save` command to install dependencies

### 2. Setting up `dev_config.js` file to hold configurations in the development environment
Go to `config` directory in the app root directory, then create a new file, `dev_config.js`.

### 3. Configuring the `dev_config.js` file
Inside the `dev_config.js` file, you'll need to create and an object with the following properties:
and insert your values.

   ` module.exports = {`
        `port: ,`
        `consumerKey: ,`
        `secretKey: ,`
        `passKey: ,`
        `shortCode: ,`
        `databaseuri:` 
`}`


    NOTE:
        the properties names should exact the same as in the `config.prod.js` file to avoid errors.


## Running the App
 ### 1. Running the App in development server
 `npm run start-dev`

 ### 2. Running the App in production server
 `npm start`



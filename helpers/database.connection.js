/**
 *  Database connection file
 */

//Dependecies
const mongoose = require ( 'mongoose' );



//Importing internal dependecies 
const config = require ( '../config/index');

//DATABASE connection
mongoose.connect(
    config.databaseuri,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    }
)
.then ( () => {
    return "Database connection established!";
})
.catch( (err) => {
    return err.message;
});

mongoose.connection.on ("connected", () => {
   return  'Connection to mongodb  was successful!';
});

mongoose.connection.on ( 'error', (error) => {
    return ( {
        error: error.message
    });
});

mongoose.connection.on ('disconnected', () => {
    return 'Connection to mongodb was disconnected';
});

process.on ( 'SIGINT', async() => {
    await mongoose.connection.close ();
    process.exit ( 0 );
});
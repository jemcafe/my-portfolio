const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();

const app = express();

app.use( bodyParser.json() );
// massive( process.env.CONNECTION_STRING ).then( db => app.set('db', db) ).catch( err => console.log( 'Error', err ) );




const port = process.env.SERVER_PORT || 3080;
app.listen( port, () => console.log( `Listening on port: ${port}` ) );
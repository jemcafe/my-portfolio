const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

app.use( bodyParser.json() );

const port = process.env.SERVER_PORT || 3085;
app.listen(port, () => console.log(`Listening on port: ${port}`));
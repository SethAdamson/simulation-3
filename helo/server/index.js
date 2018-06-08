require('dotenv').config();
const express = require('express')
    , bodyParser = require('body-parser')
    , massive = require('massive');

const {
        SERVER_PORT,
        CONNECTION_STRING,
    } = process.env;
    
const app = express();

massive(CONNECTION_STRING).then(db => app.set('db', db));

app.listen(SERVER_PORT, () => {
    console.log(`Listening on port: ${SERVER_PORT}`)
});
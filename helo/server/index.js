require('dotenv').config();
const express = require('express')
    , bodyParser = require('body-parser')
    , massive = require('massive')
    , ctrl = require('./controller');

const {
        SERVER_PORT,
        CONNECTION_STRING,
    } = process.env;
    
const app = express();

app.use(bodyParser.json());

massive(CONNECTION_STRING).then(db => app.set('db', db));

app.post('/user/create', ctrl.createUser);
app.post('/user/get', ctrl.getUser);

app.listen(SERVER_PORT, () => {
    console.log(`Listening on port: ${SERVER_PORT}`)
});
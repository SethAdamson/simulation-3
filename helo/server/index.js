require('dotenv').config();
const express = require('express')
    , bodyParser = require('body-parser')
    , massive = require('massive')
    , ctrl = require('./controller')
    , session = require('express-session');

const {
        SERVER_PORT,
        CONNECTION_STRING,
        SESSION_SECRET
    } = process.env;
    
const app = express();

app.use(bodyParser.json());

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
});

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));

app.post('/user/create', ctrl.createUser);
app.post('/user/get', ctrl.getUser);
app.get('/posts/', ctrl.getPosts);
app.post('/posts/', ctrl.newPost);
app.get('/single/', ctrl.getSingle);
app.post('/api/auth/logout', ctrl.logout);
app.get('/api/auth/me', ctrl.userInfo);


app.listen(SERVER_PORT, () => {
    console.log(`Listening on port: ${SERVER_PORT}`)
});
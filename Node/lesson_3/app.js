const express = require('express');
const expressHbs = require('express-handlebars');
const path = require("path");

const {PORT} = require('./config/variables')
const users = require('./db/users');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const {authRouter,userRouter} = require('./routers');


app.get ('/ping', ((req, res) => res.json('Pong')));

app.use('/auth', authRouter);
app.use('/users', userRouter);

app.get('/users/:user_id', (req, res) => {
    const {user_id} = req.params;
    const currentUser = users[user_id];

    if (!currentUser) {
        res.status(404).end('User not found');
        return;
    }
    res.json(currentUser)
});

app.listen(PORT, () => {
    console.log('App listen', PORT)
});


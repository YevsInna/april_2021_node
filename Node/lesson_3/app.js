const express = require('express');

const { PORT } = require('./config/variables');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { authRouter, userRouter, registrationRouter } = require('./routers');

app.get('/ping', ((req, res) => res.json('Pong')));
app.get('/', ((req, res) => res.redirect('/auth')));

app.use('/auth', authRouter);
app.use('/users', userRouter);
app.use('/registration', registrationRouter);

app.listen(PORT, () => {
    console.log('App listen', PORT);
});

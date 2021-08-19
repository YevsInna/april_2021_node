const express = require('express');
const expressHbs = require('express-handlebars');
const path = require("path");

const {PORT} = require('./config/variables')
const users = require('./db/users');


const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname, 'static')));
app.set('view engine', '.hbs');
app.engine('.hbs', expressHbs({defaultLayout: false}))
app.set('views', path.join(__dirname, 'static'));


app.get('/',(req, res) => {
    console.log(req);
    res.status(404).end('Not found')
});

app.get('/users', (req, res) => {
    res.render('users', {users});
});

app.get('/users/:user_id',(req, res) => {
    const {user_id} = req.params;
    const currentUser = users[user_id];

    if (!currentUser){
        res.status(404).end('User not found');
        return;
    }
     res.json(currentUser)
})

app.get('/login', (req, res) =>{
    res.render('login', {isUser:true});
} )



app.post('/auth', (req, res) => {
        console.log(req.body);
        const isUser = true;
        const {email, password} = req.body;

        if(isUser){
            res.redirect('/users');
            return;
        }
        res.redirect('/login')
    }
);




app.listen(PORT, ()=>{
    console.log('App listen', PORT)
})


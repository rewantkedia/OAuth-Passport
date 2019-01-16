const express = require('express');
const authRoute = require('./routes/auth_routes');
const profileRoute = require('./routes/profile_routes');
const passportSetup = require('./config/passport-setup');
const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');

const app = express();
mongoose.connect('mongodb://localhost/ninja');

app.set('view engine','ejs');

app.use(cookieSession({
    maxAge: 24*60*60*1000,
    keys: [keys.session.cookieKey]
}));

//initialise passport
app.use(passport.initialize());
app.use(passport.session());
app.use('/auth',authRoute);
app.use('/profile',profileRoute);
app.get('/',(req,res)=>{
    // res.send({
    //     name:"Rewant"
    // })
    res.render('home');
});

const port = 3000;
app.listen(port,function(){
    console.log('We are live on port '+port);
});


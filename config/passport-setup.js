const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');
const User = require('../models/user-model');
passport.use(
    new GoogleStrategy({
    //google strategy
        callbackURL: '/auth/google/redirect',
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret
    },(accessToken,refreshToken,profile,done)=>{
        //passport callbak function
        console.log(profile);  
        new User({
            username: profile.displayName,
            googleId: profile.id
        }).save().then((user)=>{
            console.log('New user logged ');
            console.log(user);
        })
    }) 
)
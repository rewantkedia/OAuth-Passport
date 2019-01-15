const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');
const User = require('../models/user-model');

passport.serializeUser((user,done)=>{
    done(null,user.id);
});
passport.deserializeUser((id,done)=>{
    User.findById(id).then((user)=>{
        done(null,user);
    });
});

passport.use(
    new GoogleStrategy({
    //google strategy
        callbackURL: '/auth/google/redirect',
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret
    },(accessToken,refreshToken,profile,done)=>{
        //passport callbak function
        console.log(profile);  
        User.findOne({googleId:profile.id}).then((curr_user)=>{
            if(curr_user)
            {
                console.log('User Already Present in DB');
                console.log(curr_user);
                done(null,curr_user);
            }
            else{
                new User({
                    username: profile.displayName,
                    googleId: profile.id
                }).save().then((user)=>{
                    console.log('New user logged ');
                    console.log(user);
                    done(null,user);
                })
            }
        }); 
    }) 
)
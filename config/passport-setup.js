const passport = require('passport');
const GoogleStrategy = require('passport-google-oath20');

passport.use(
    new GoogleStrategy({
    //google strategy
    }),()=>{
        //passport callbak function
    } 
)
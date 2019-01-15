const express = require('express');
const authRoute = require('./routes/auth_routes');
const passportSetup = require('./config/passport-setup');
const app = express();

app.set('view engine','ejs');

app.use('/auth',authRoute);
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
const express = require('express');

const app = express();

app.set('view engine','ejs');

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
const router = require('express').Router();

router.get('/login',(req,res)=>{
    res.render('login');
});

router.get('/google',(req,res)=>{
    //handle passport
    res.send('Logging with google');
});

router.get('/logout',(req,res)=>{
    //handle with passport
    res.send('logging out');
})

module.exports = router;

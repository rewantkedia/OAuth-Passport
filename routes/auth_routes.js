const router = require('express').Router();
const passport = require('passport');
router.get('/login',(req,res)=>{
    res.render('login');
});


//auth with google
router.get('/google',passport.authenticate('google',{
    scope: ['profile']
}));

router.get('/logout',(req,res)=>{
    //handle with passport
    res.send('logging out');
})
  
router.get('/google/redirect',passport.authenticate('google'),(req,res)=>{
    //req.user gives the details of the user logged in.
    // res.send('We are Here');
    res.send(req.user);
})
module.exports = router;

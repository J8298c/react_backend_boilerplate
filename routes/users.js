const express = require('express');
const router = express.Router();
const User = require('../model/userschema');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([{
      id: 1,
      username: "sameSpice"
  }, {
      id: 2,
      username: "Do1oresH4ze"
  }])
});
router.post('/', (req, res)=>{
    const user = new User({email: req.body.email, password: req.body.password});
    console.log('Your user is ', user);
    user.save((err)=>{
        if(err){
            console.log(err);
        }
        res.json([{email: user.email,}])
    })
});
router.post('/login', (req, res)=>{
    const user = new User({email: req.body.email, password: req.body.password});
    user.findOne({email: user.email}, (err)=>{
        if(err){
            console.log(err)
        }
        res.json([{email: user.email}])
    })
})
module.exports = router;

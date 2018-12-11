var express = require('express');
var router = express.Router();
var User = require('../models/user')
/* GET users listing. */
router.addUser = function (req,res){
  res.setHeader('Content-Type', 'application/json');
  // console.log(req.body)
  if(req.body.account&&req.body.role){
    /**
     * role:
     *  1: common
     *  2: admin
     */
     var user = new User({
       account: req.body.account,
       role: req.body.role
     })

     user.save(function (err){
       if(err){
          res.json({ message: 'User NOT Added!', errmsg : err});
       }else{
         res.json({ message: 'User Added Successfully!',data:user});
       }
        
     })
  }else{
    res.json('Wrong Properties!');
  }
 
}


router.findByAccount = function (req,res){
  console.log(req.params)
  User.find({ "account":req.params.account},function (err, user){
    if (err) {
      res.status(404);
      res.send({
        message: "Invalid account,Do not match!"
      });
    }else{
      res.json(user)
    }
  })
}
module.exports = router;

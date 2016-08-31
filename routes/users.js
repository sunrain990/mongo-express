var express = require('express');
var router = express.Router();

var mongoose = require('mongoose')
var User = mongoose.model('User')
var Klass = mongoose.model('Klass')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/test', function(req, res, next) {
  var user = new User({
    uid: 1,
    username: 'Sid'
  })

  user.save(function(err) {
    if(err) {
      res.end('Error');
      return next();
    }
    User.find({}, function(err, docs) {
      if(err) {
        res.end('Error');
        return next();
      }
      res.json(docs)
    })
  })
})

router.get('/joinclass', function(req, res, next) {
  var klass = new Klass({
    cid: 1,
    classname: 'klass'
  });

  var user = new User({
    uid: 2,
    username: 'xiaoxiao',
    class: klass
  });

  klass.save(function(err) {
    if(!err) {
      console.log(klass, ' this is class_');
      user.save(function(err) {
        if(!err) {
          console.log(user, ' this is user');
          return res.json({success: 'success'})
        }else {
          return res.json({error: err})
        }
      })
    }else{
      return res.json({error: err})
    }
  })
})

module.exports = router;

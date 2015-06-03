var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();


var Post = mongoose.model('Post');
var Garden = mongoose.model('Garden')

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/gardens', function(req, res, next) {
  Garden.find(function(err, gardens){
    if(err){ 
      return next(err);
    }

    res.json(gardens);
  });
});

router.post('/gardens', function(req, res, next) {
  var garden = new Garden(req.body);

  post.save(function(err, garden){
    if(err){ return next(err); }

    res.json(garden);
  });
});

router.param('garden', function(req, res, next, id) {
  var query = Garden.findById(id);

  query.exec(function (err, garden){
    if (err) { return next(err); }
    if (!garden) { return next(new Error("can't find post")); }

    req.garden = garden;
    return next();
  });
});

// router.param('garden', function(req, res, next, id) {
//   var query = Comment.findById(id);

//   query.exec(function (err, comment){
//     if (err) { return next(err); }
//     if (!comment) { return next(new Error("can't find comment")); }

//     req.comment = comment;
//     return next();
//   });
// });

// router.get('/posts/:post', function(req, res, next) {
//   req.post.populate('comments', function(err, post) {
//     res.json(post);
//   });
// });

// router.put('/posts/:post/upvote', function(req, res, next) {
//   req.post.upvote(function(err, post){
//     if (err) { return next(err); }

//     res.json(post);
//   });
// });

// router.put('/posts/:post/downvote', function(req, res, next) {
//   req.post.downvote(function(err, post){
//     if (err) { return next(err); }

//     res.json(post);
//   });
// });


module.exports = router;
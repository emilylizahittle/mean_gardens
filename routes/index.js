var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();

var Garden = mongoose.model('Garden');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/api/gardens', function(req, res, next) {
  Garden.find(function(err, gardens){
    if(err){ 
      return next(err);
    }
    res.json(gardens);
  });
});

//posts data to db
router.post('/api/gardens', function(req, res, next) {
  var garden = new Garden(req.body);
  console.log('posting a garden');

  garden.save(function(err, garden){
    if(err){ return next(err); }
    console.log("a garden has been saved!")
    res.json(garden);
  });
});

router.delete('/api/gardens', function (req, res, next) {
  var garden = Garden(req.body);
  garden.remove(function(err, garden){
    if(err){ 
      return next(err);
    }
    res.send('DELETE request was recieved')
  });
});

router.param('garden', function(req, res, next, id) {
  var query = Garden.findById(id);
  console.log('getting your params')
  query.exec(function (err, garden){
    if (err) { return next(err); }
    if (!garden) { return next(new Error("can't find garden")); }

    req.garden = garden;
    return next();
  });
});

router.get('/api/gardens/:garden', function(req, res, next) {
  console.log("let me get you a garden")
  req.post.populate('gardens', function(err, garden) {
    res.json(garden);
  });
});

module.exports = router;
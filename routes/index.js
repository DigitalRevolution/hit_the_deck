const express = require('express');
const router = express.Router();
const api = require('../api/api');
const intensity = [0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6,0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6];

function createDay(currentMax, i){
  this.day = i + 1;
  this.reps = Math.round(intensity[i] * currentMax);
  this.intreval = i<7 ? 'Every Hour' : 'Every Half Hour';
}

function Schedule(currentMax){
  var day = [];
  for(i=0;i<14;i++){
    day.push(new createDay(currentMax, i));
  }
  return day;
}

function CreateNewUser(name, age, currentMax) {
  this.name = name;
  this.age = age;
  this.currentMax = currentMax;
  this.schedule = Schedule(currentMax);
  this.log = {};
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/user', function(req, res, next){
  var drew = new CreateNewUser(req.query.name, req.query.age, req.query.currentMax)
  res.send(drew);
});

router.get('/test',function(req, res, next){
  var drew = new api.CreateNewUser(req.query.name, req.query.age, req.query.currentMax);
  res.send(drew);
});
// changed some stuff
module.exports = router;

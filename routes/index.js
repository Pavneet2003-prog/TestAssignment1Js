var express = require('express');
var router = express.Router();

/* GET home page. */
//path is relative to path assto the object in app.js
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//about page
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Us' });
});
//about page
router.get('/project', function(req, res, next) {
  res.render('project', { title: 'Projects' });
});
//about page
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Projects' });
});
module.exports = router;

var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { pagetitle: 'My Cool Site' });
});
module.exports = router;
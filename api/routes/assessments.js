var express = require('express');
var router = express.Router();
var apiRoot = require('app-root-path');
var configuration = require(apiRoot + "/control.json");

/* GET users listing. */
router.get('/', function(req, res, next) {
  results = []
  for (var item of configuration){
    results.push(item.name);
  }
  res.json({ title: "Choose a Dimension of Wellbeing:", 
             material: results,
	     component: "menu"});
});

module.exports = router;


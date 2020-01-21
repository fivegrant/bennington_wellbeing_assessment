var express = require('express');
var router = express.Router();
var apiRoot = require('app-root-path');
var configuration = require(apiRoot + "/control.json");

/* GET users listing. */
router.get('/', function(req, res, next) {
  let result = {title: "Error: Dimension not Found", components: "none"}

  for (var item of configuration){
    if(item.name == req.query.dimension ){
      result = { title: item.name, 
                 material: item.questions,
	         component: "questions"};
      break
    }
  }
  res.json(result);
});

module.exports = router;


var express = require('express');
var router = express.Router();
var apiRoot = require('app-root-path');
var configuration = require(apiRoot + "/control.json");

/* GET users listing. */
router.get('/', function(req, res, next) {
  let result = { title: req.query.dimension, 
                 material: "No Results",
	         component: "resources"};
  
  for (var item of configuration){
    if(item.name == req.query.dimension){
      result.material = item.response["0"];
      for (var bound of Object.getOwnPropertyNames(item.response)){
        if(parseInt(req.query.score) < parseInt(bound)){
	  result.material = item.response[bound];
	  break;
	}
      }
      break
    }
  }
  res.json(result);
});

module.exports = router;


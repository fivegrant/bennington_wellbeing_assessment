var express = require('express');
var router = express.Router();
var apiRoot = require('app-root-path');
var configuration = require(apiRoot + "/control.json");

const coerceInt = (value) => value - 0;

function getSum(values){
  return values.reduce(((x, y) => (parseInt(x)+ parseInt(y))));
}

function parseValues(unprocessed){
  let parsed = unprocessed.split(" ");
  return parsed.map(coerceInt);
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  let result = { title: req.query.dimension, 
                 material: "No Results",
	         component: "results"};
  
  scoreSum = getSum(parseValues(req.query.score));
  scores = parseValues(req.query.score);
  sqlList = [];
  for (var item of configuration){
    if(item.name == req.query.dimension){
      counter = 0;
      for (var q of item.questions){
        sqlList.push({question: q, 
	              score: scores[counter], 
		      dimension: req.query.dimension});
	counter ++;
      }
      result.material = item.response["0"];
      for (var bound of Object.getOwnPropertyNames(item.response)){
        if(scoreSum < coerceInt(bound)){
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


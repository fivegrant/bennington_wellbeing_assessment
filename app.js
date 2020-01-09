const fs = require('fs');
const survey = require('./survey');

var config = JSON.parse(fs.readFile(config.json));

//Generate the relevant survey, this value would be passed in
//based off of the tile the user selects
var section = "social";
for (division of config){
  if(section == division.name){
    section = division.content;
  }
}


import React from 'react';
import './Assessment.scss';
import Likert from 'react-likert-scale';

let defaultLikert = [
		 {value: 1, text: "Strongly Disagree"},
		 {value: 2, text: "Disagree"},
	         {value: 3, text: "Slightly disagree"},
		 {value: 4, text: "Mixed or neither agree nor disagree"},
		 {value: 5, text: "Slightly agree"},
		 {value: 6, text: "Agree"},
		 {value: 7, text: "Strongly Agree"}
		]

function getSum(values){
  return values.reduce(((x, y) => (x+y)));
}

function Assessment(props) {
  let answers = []
  for(var item of props.material){
    answers.push(0);
  }
  let positionCounter = 0;


  // TODO? Refactor?
  /// Make this totally functional
  /// Separate into it's own component?
  /// Remove from positionCounter?
  function listLikert(x) {
    // current points to a new value rather than positionCounter
    const current = positionCounter + 0;
    positionCounter++;
    function updateAnswers(value){
       answers[current] = parseInt(value); 
    };

    var likertOptions = {
      question: x,
      responses: defaultLikert,
      picked: updateAnswers
    };
    return <Likert {...likertOptions}/>
  };



  const selections = props.material.map(listLikert) ;
  let clickFunction = () => props.onChange(`/resources?dimension=${encodeURIComponent(props.title)}&score=${encodeURIComponent(getSum(answers))}`)

  return (<div>
            {selections}
            <a href="/#" onClick={clickFunction}>Submit</a>
          </div>);
}

export default Assessment;

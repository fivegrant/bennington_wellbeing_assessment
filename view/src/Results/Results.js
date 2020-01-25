import React from 'react';
import './Results.scss';

function Results(props) {
  let clickFunction = () => props.onChange(`/assessments`)
  return (<div>
  	  <p className="results">{props.material}</p>
          <a href="/#" onClick={clickFunction}>Back to Main Menu</a>
	  </div>);
}

export default Results;

import React from 'react';
import './Results.scss';

function Results(props) {
  let clickFunction = () => props.onChange(`/assessments`)
  return (<div>
  	  <div className="results">{props.material}</div>
          <div className="transition-button" href="/#" onClick={clickFunction}>Dimensions</div>
	  </div>);
}

export default Results;

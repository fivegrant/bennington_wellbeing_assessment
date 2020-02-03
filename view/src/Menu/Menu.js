import React from 'react';
import './Menu.scss';

function Menu(props) {
  function convert(x) {
    let clickFunction = () => props.onChange(`/questions?dimension=${encodeURIComponent(x)}`)
    return <div key={x} className="transition-button" href="/#" onClick={clickFunction}>{x}</div>
  };
  const selections = props.material.map(convert);
  return (<div className="menu">{selections}</div>);
}

export default Menu;

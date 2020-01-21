import React from 'react';
import './Menu.scss';

function Menu(props) {
  function convert(x) {
    let clickFunction = () => props.onChange(`/questions?dimension=${encodeURIComponent(x)}`)
    return <li key={x}><a href="/#" onClick={clickFunction}>{x}</a></li>
  };
  const selections = props.material.map(convert);
  return (<ul className="menu">{selections}</ul>);
}

export default Menu;

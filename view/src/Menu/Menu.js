import React from 'react';
import './Menu.scss';

function Menu(props) {
  const convert = (x => <li>{x}</li>);
  const selections = props.material.map(convert) ;
  return (<ul class="menu">{selections}</ul>);
}

export default Menu;

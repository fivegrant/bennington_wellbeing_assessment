import React, {useState, useEffect} from 'react';
import './App.scss';
import { Menu } from "./Menu"
import { Assessment } from "./Assessment"
import { Results } from "./Results"

function App() {
  // Hooks
  const [content, setContent] = useState({title: "No Response"});
  const [route, setRoute] = useState("/assessments");

  function reroute(newRoute){
    setRoute(newRoute);
  };

  useEffect(() => {
    const updateContent = async () => {
      const result = await fetch(route).then((response) => response.json());
      setContent(result);
      }
    updateContent();
    }, [route]);

  // Handle User Input
  // Decide which component will be added
  function generateComponent(select, props){
   if(select === "menu"){
      return (<Menu material={props.material} onChange={reroute}/>);}
   else if(select === "questions"){
      return (<Assessment title={props.title} material={props.material} onChange={reroute}/>);
    }
   else if(select === "results"){
      return (<Results material={props.material} onChange={reroute}/>);
    }
    else{
      return <div></div>;
    }
  }

  return (
    <div className="App">
      <h1>{content.title}</h1>
      {generateComponent(content.component, content)}
    </div>
  );
}

export default App;

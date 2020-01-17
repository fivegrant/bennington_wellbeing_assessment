import React, {useState, useEffect} from 'react';
import './App.scss';
import { Menu } from "./Menu"

function App() {
  // Hooks
  const [content, setContent] = useState({title: "No Response"});
  const [answers, setAnswers] = useState({});
  const [focus, setFocus] = useState(0);

  useEffect(() => {
    const updateContent = async () => {
      const result = await fetch("/assessments").then((response) => response.json());
      setContent(result);
      }
    updateContent();
    }, []);

  useEffect(() => {
      setFocus(content.component);
    }, [content]);

  // Decide which component will be added
  function generateComponent(select, props){
    if(focus === "menu"){
      return (<Menu material={props}/>);
    }
    else{
      return <a>Error</a>;
    }
  }

  return (
    <div className="App">
      <h1>{content.title}</h1>
      {generateComponent(focus, content.material)}
    </div>
  );
}

export default App;

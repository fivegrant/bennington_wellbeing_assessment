import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [content, setContent] = useState({title: "No Response"});
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    const updateContent = async () => {
      const result = await fetch("/assessments").then((response) => response.json());
      setContent(result);
      }
    updateContent();
    }, []);

  return (
    <div className="App">
      <h1>{content.title}</h1>
    </div>
  );
}

export default App;

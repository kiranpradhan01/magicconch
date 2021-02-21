import conch from './magicconch.jpg';
import './App.css';
import React, { useState } from 'react';

const responses = [
  "no",
  "yes",
  "maybe",
  "try asking again",
  "perhaps",
  "it depends",
  "GAME OVER",
];

const locations = [
  {left: '10%', top: '100px'}, 
  {left: '20%', top: '300px'}, 
  {left: '20%', top: '450px'}, 
  {left: '30%', top: '200px'}, 
  {left: '70%', top: '450px'}, 
  {left: '40%', top: '200px'}, 
];

function App() {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
  const [responseLocation, setResponseLocation] = useState(locations[0]);

  function askTheConch(e) {
    e.preventDefault();

    // set text to empty
    setQuestion(''); 

    // find a RANDOM value from the 'responses' array
    let randomResponse = Math.floor(Math.random() * responses.length);
    let randomLocation = Math.floor(Math.random() * locations.length);

    // set the text value of 'response' to be the result of step 2
    setResponse(responses[randomResponse]);
    setResponseLocation(locations[randomLocation]);
  }

  const responseStyle = (responseLocation) => ({
    fontSize: '90px', 
    fontStyle: 'italic',
    textShadow: '2px 2px 5px black',
    position: 'absolute',
    left: responseLocation.left,
    top: responseLocation.top,
    textAlign: 'center',
    WebkitTextStrokeColor: 'black', 
    WebkitTextStrokeWidth: '2.5px'
  })

  return (
    <div className="App">
      <main>
        <div>
          <p id="response" style={responseStyle(responseLocation)} >
            {response}
          </p>
          <img src={conch} style={{ height: '500px'}} alt="the magic conch" />
        </div>
        
        <p className="title-prompt">
          Ask the Magic Conch
        </p>
        <div style={{ marginBottom: '50px' }}>
          <input 
            id="question" 
            style={{ marginRight: '10px' }} 
            value={question} 
            onChange={(input) => {
              setQuestion(input.value); 
              setResponse('');
            }
          }>
          </input>
          <button onClick={askTheConch} disabled={question?.length === 0}>
            Ask
          </button>
        </div>
      </main>
      <footer>
        By Kiran and Patrin. <a target="_blank" href="https://github.com/kiranpradhan01/magicconch">Github</a>
      </footer>
    </div>
  );
}
export default App;

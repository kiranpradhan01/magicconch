import logo from './logo.svg';
import conch from './magicconch.jpg';
import './App.css';

const responses = [
    "no",
    "yes",
    "maybe",
    "try asking again",
    "perhaps",
    "it depends",
    "game over",
];
function App() {

  function handleSubmit(e) {
    e.preventDefault();

    // clear the 'question' textbox

    // find a RANDOM value from the 'responses' array
    let randomResponse = Math.floor(Math.random() * responses.length) + 1;
    
    console.log(randomResponse);

    // set the text value of 'response' to be the result of step 2
    document.getElementById('response').innerText = responses[randomResponse];
  }
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <p id="response" style={{ fontSize: '75px', position: 'absolute', left: '500px'}}>
            
          </p>
          <img src={conch} style={{ height: '500px'}} alt="the magic conch" />
        </div>
        
        <p className="title-prompt">
          Ask the Magic Conch
        </p>
        <div style={{ marginBottom: '50px' }}>
          <input id="question" style={{ marginRight: '10px' }}>
          
          </input>
          <button onClick={handleSubmit}>
            Ask
          </button>
        </div>
        
      </header>
    </div>
  );
}
export default App;

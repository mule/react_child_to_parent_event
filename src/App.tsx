import React, {useState} from 'react';
import './App.css';
import Child from './Child';
  
function App() {

  const [counter,
    setCounter] = useState(0);

  function IncrementCounter() {
    setCounter(counter + 1);
  }

  return (
    <div className="App container">
      <h1>React kata: Child to parent event</h1>
          <div className="level">
            <div className="level-item">I'm a parent with a counter:
              <span>{counter}</span>
            </div>
            <div className="level-item">
              <Child tellParent={IncrementCounter}/>
            </div>
          </div>
    </div>
  );
}

export default App;

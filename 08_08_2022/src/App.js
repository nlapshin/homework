import { useState, useRef } from 'react';
import './App.css';

function App() {
  const [output, setOutput] = useState([])
  const inputRef = useRef(null)

  function onClick() {
    console.log('value', inputRef.current.value)
  }

  return (
    <div className="App">
      <input ref={inputRef} type="text" />
      <button onClick={onClick}>Кнопка</button>
    </div>
  );
}

export default App;

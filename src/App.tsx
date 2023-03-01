import React from 'react';
import './App.css';

function App() {
  const [count, setCount] = React.useState(0);
  
  return (
    <div className="App">
        <p>
          { count }
        </p>
        <button onClick={() => setCount((prev: number) => prev + 1)}>Click</button>
    </div>
  );
}

export default App;

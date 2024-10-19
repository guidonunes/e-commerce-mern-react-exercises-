import React, { useState } from 'react';

function App() {
  const [number, setNumber] = useState(0);

  const addNumber = () => {
    setNumber(number + 1);
  }

  return (
    <div>
      <h1>Number: {number} </h1>
      <button onClick={addNumber}>Click me!</button>
    </div>
  )
}

export default App;

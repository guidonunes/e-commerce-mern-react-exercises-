import React, { useState } from 'react';

function App() {
  const [myObj, setMyObj] = useState({
    key1: 'gui 1',
    key2: 'gui 2',
    key3: 'gui 3',
  });

  const change = () => {
    setMyObj(
      prevObj => ({
        ...prevObj,
        key1: 'gui 1 changed',
      })
    );
  }

  return (
    <div>
      <h1>{myObj.key1}</h1>
      <button onClick={change}>Change</button>
    </div>
  )
}

export default App;

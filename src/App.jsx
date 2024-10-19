import React, { useState } from 'react';

function App() {
  const [list, setList] = useState([]);
  const [item, setItem] = useState('');

  const addToList = () => {
    list.push(item);
    setList([...list]);
  }

  return (
    <div>
      <table>
        <tbody>
          {list.length!==0?(
            list.map((item, index) => (
              <tr key={index}>
                <td>{item}</td>
                <td><button>Remove</button></td>
              </tr>
            ))
          ):(<tr><td>No items</td></tr>)}
        </tbody>
      </table>

      <p>{list.length}</p>
      <input onChange={(e)=>setItem(e.target.value)} placeholder='item' />
      <button onClick={addToList}>Add</button>
    </div>
  )
}

export default App;

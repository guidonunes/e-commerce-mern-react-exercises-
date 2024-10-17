import React, { useRef } from 'react';



function App() {
  let myHeadline = useRef()


  const changeHeadline = () => {
    myHeadline.innerHTML = "<ul><li>B<li>A</li></li></ul>";
  }

  return (
    <div>
      <h1 ref={(h1)=>myHeadline=h1}></h1>

      <button onClick={changeHeadline}>Click me!</button>
    </div>
  )
}

export default App

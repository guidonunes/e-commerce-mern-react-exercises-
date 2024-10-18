import { useRef } from 'react';



function App() {
  let myHeadline= useRef()



  const changeHeadline = () => {
    myHeadline.current.classList.remove('text-success')
    myHeadline.current.classList.add('text-danger')
  }

  return (
    <div>
      <h1 ref={myHeadline} className='text-success'>My React App</h1>

      <button onClick={changeHeadline}>Click me!</button>
    </div>
  )
}

export default App;

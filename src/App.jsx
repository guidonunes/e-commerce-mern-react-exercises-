import { useRef } from 'react';



function App() {
  let myImg = useRef()


  const changeHeadline = () => {
    myImg.current.src = "https://placehold.co/600x400/000000/FFF";
    myImg.current.setAttribute('height', '200');
    myImg.current.setAttribute('width', '300');
  }

  return (
    <div>
      <img ref={myImg} src='https://placehold.co/600x400' />

      <button onClick={changeHeadline}>Click me!</button>
    </div>
  )
}

export default App;

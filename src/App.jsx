import { useRef } from 'react';



function App() {
  let APIData = useRef(null);
  let myData = useRef(null);

  const fetchData = async () => {
    const response = await fetch("https://dummyjson.com/products")
    APIData.current = await response.json();
  }

const showData = () => {
  myData.current.innerText = JSON.stringify(APIData.current);
}


  return (
    <div>
      <p ref={myData}></p>
      <button onClick={fetchData}>Call API</button>
      <button onClick={showData}>Click me!</button>
    </div>
  )
}

export default App;

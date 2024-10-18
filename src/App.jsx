import { useRef } from 'react';



function App() {
  let firstName, lastName = useRef()



  const changeHeadline = () => {
    let fName = firstName.value;
    let lName = lastName.value;

    alert(fName + ' ' + lName)
  }

  return (
    <div>
      <input ref={(a)=>firstName=a} placeholder='First Name' /> <br />
      <input ref={(a)=>lastName=a} placeholder='Last Name' /> <br />

      <button onClick={changeHeadline}>Click me!</button>
    </div>
  )
}

export default App;

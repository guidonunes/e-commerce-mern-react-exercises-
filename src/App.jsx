import React, { useState } from 'react';

function App() {

  let [formObj, setFormObj] = useState({
    firstName: '',
    lastName: '',
    city: '',
    gender: ''
  });

  return (
    <div className="container">
      <form action="">
        <input value={formObj.firstName} placeholder='First Name' />
        <input value={formObj.lastName} placeholder='Last Name' />
        <select value={formObj.city}>
          <option value="">Choose City</option>
          <option value="Rio">Rio</option>
          <option value="Salvador">Salvador</option>
        </select>
        <input  checked={formObj.gender === "Male"} type="radio" name="gender" />Male
        <input checked={formObj.gender === "Female"} type="radio" name="gender" />Female
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App;

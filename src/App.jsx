import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <div className='form-container'>
        <form action="">

          <div className="title">
            <img src="" alt="Logo" />
            <h2>Flow Insights</h2>
            <p>Imagine uncovering the truth about the worlds behaviour with minimal error and maximum privacy</p>
          </div>

          
          <div className='name-input'>
          <input type="text" placeholder='First Name'  required/>
          <input type="text" placeholder='Middle Name'  required/>
          <input type="text" placeholder='Last Name'  required/>
          </div>


          <div className='name-input'>
          
          </div>

          <div className="name-input">
            <input type="number" id="day" name="day" min="1" max="31" placeholder="Day"/>
            <select name="month" id="">
              <option value="">Select Month</option>
              <option value="">January</option>
              <option value="">Febuary</option>
              <option value="">March</option>
              <option value="">April</option>
              <option value="">May</option>
              <option value="">June</option>
              <option value="">July</option>
              <option value="">August</option>
              <option value="">September</option>
              <option value="">October</option>
              <option value="">November</option>
              <option value="">December</option>
            </select>
            <input type="number" id="year" name="year" min="1900" max="2024" />
          </div>
        </form>
        </div>
        </>
  )
}

export default App

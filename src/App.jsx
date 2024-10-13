import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <div className='form-container'>
        <form action="">

          <div className="title">
            <img src="" alt="" />
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
            <input type="month" placeholder='Address' required/>
            <input type="month" id="month" name="month"/>
          </div>
        </form>
        </div>
        </>
  )
}

export default App

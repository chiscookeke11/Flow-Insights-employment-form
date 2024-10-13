import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <div className='form-container'>
        <form action="">

          
          <div className='name-input'>
          <input type="text" placeholder='First Name'  required/>
          <input type="text" placeholder='Middle Name'  required/>
          <input type="text" placeholder='Last Name'  required/>
          </div>


          <div className='name-input'>
          
          </div>

          <div className="name-input">
            <input type="text" placeholder='Address' required/>
            <input type="text" placeholder='Address' required/>
            <input type="text" placeholder='Address' required/>
          </div>
        </form>
        </div>
        </>
  )
}

export default App

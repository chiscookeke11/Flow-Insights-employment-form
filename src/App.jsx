import { useState } from 'react';
import { countries } from 'countries-list'; 
import './App.css';
import Days from './days';
import YearSelect from './YearSelect'

function App() {
  const countryList = Object.values(countries);

  return (
    <>
      <div className='form-container'>
        <form action="">

          <div className="title">
            <img src="https://github.com/chiscookeke11/Test-pagea/blob/main/flowinsights-logo.jpg?raw=true" alt="Logo" className="logo" />
            <h2>Flow Insights</h2>
            <p>Imagine uncovering the truth about the world's behavior with minimal error and maximum privacy</p>
          </div>

          <div className='name-input'>
            <input type="text" placeholder='First Name' required />
            <input type="text" placeholder='Middle Name' required />
            <input type="text" placeholder='Last Name' required />
          </div>

          <div className="name-input">
            <Days/>
            <select name="month" id="">
              <option value="">Select Month</option>
              <option value="1">January</option>
              <option value="2">February</option>
              <option value="3">March</option>
              <option value="4">April</option>
              <option value="5">May</option>
              <option value="6">June</option>
              <option value="7">July</option>
              <option value="8">August</option>
              <option value="9">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>
            <YearSelect/>
           
          </div>

          <div className='name-input address'>
            <input type="text" placeholder='Street Address' />
            <input type="text" placeholder='Street Address line 2' />
            <input type="text" placeholder='City' />
            <input type="text" placeholder='State' />
            <input type="text" placeholder='Zip Code' />
            
            {/* Country dropdown using the countries-list library */}
            <select name="country" id="country">
              <option value="">Select Country</option>
              {countryList.map((country, index) => (
                <option key={index} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>

          <div className="name-input address">
            <input type="email" placeholder='myname@example.com' />
            <input type="telephone" placeholder='(000) 000-0000' />
            <input type="url" placeholder='LinkedIn' />
          </div>

          <div className='name-input'>
            <input type="date" placeholder='Start date' required />
            <select name="position" id="position">
              <option value="">Position applied</option>
              <option value="">Sales Rep</option>
              <option value="">Market analyst</option>
              <option value="">Position applied</option>
            </select>
          </div>
          <div className='name-input'>
            <textarea name="skills" id="skills" cols="100" rows="10" placeholder='Skills'></textarea>
          </div>

          <div className='name-input'>
            <label for="files">Upload resume</label>
           <input type="file" name="files" />
          </div>

          <div className='name-input'>
            <textarea name="cover-letter" id="cover-letter" cols="100" rows="10" placeholder='Cover Letter'></textarea>
          </div>

          
          <button className="apply-btn" >Apply</button>

        </form>
      </div>
    </>
  );
}

export default App;

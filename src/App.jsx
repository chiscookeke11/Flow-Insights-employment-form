import { useState } from 'react';
import { countries } from 'countries-list'; // Import the countries-list library
import './App.css';

function App() {
  const countryList = Object.values(countries); // Get all countries from the library

  return (
    <>
      <div className='form-container'>
        <form action="">

          <div className="title">
            <img src="https://github.com/chiscookeke11/Test-pagea/blob/main/flowinsights-logo.jpg?raw=true" alt="Logo" />
            <h2>Flow Insights</h2>
            <p>Imagine uncovering the truth about the world's behavior with minimal error and maximum privacy</p>
          </div>

          <div className='name-input'>
            <input type="text" placeholder='First Name' required />
            <input type="text" placeholder='Middle Name' required />
            <input type="text" placeholder='Last Name' required />
          </div>

          <div className="name-input">
            <input type="number" id="day" name="day" min="1" max="31" placeholder="Day" />
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
            <input type="number" id="year" name="year" min="1900" max="2024" placeholder='Year' />
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

        </form>
      </div>
    </>
  );
}

export default App;

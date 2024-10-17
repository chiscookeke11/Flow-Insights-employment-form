import { useState } from 'react';
import { countries } from 'countries-list'; 
import './App.css';
import Days from './days';
import YearSelect from './YearSelect';
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";

function Contact() {
  const { register, reset, handleSubmit } = useForm();
  const [isSuccess, setIsSuccess] = useState(false);
  const [result, setResult] = useState(null);
  const accessKey = "3f34a90b-c098-4d01-b95f-584373ae9f58";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: "Flowinsights org",
      subject: "Employee application",
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setResult(msg);
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setResult(msg);
    },
  });

  
  const countryList = Object.values(countries).map(country => country);

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)}>

        <div className="title">
          <div className="logo-box">
          <img src="https://github.com/chiscookeke11/Test-pagea/blob/main/flowinsights-logo.jpg?raw=true" alt="Logo" className="logo" /></div>
          <h2>Flow Insights</h2>
          <p>Imagine uncovering the truth about the world's behavior with minimal error and maximum privacy</p>
        </div>

        <div className="name-input">
          <input type="text" placeholder="First Name" {...register("firstName")} required />
          <input type="text" placeholder="Middle Name" {...register("middleName")} required />
          <input type="text" placeholder="Last Name" {...register("lastName")} required />
        </div>

        <div className="name-input">
          <Days />
          <select name="month" {...register("month")} required>
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
          <YearSelect />
        </div>

        <div className="name-input address">
          <input type="text" placeholder="Street Address" {...register("streetAddress")} />
          <input type="text" placeholder="Street Address line 2" {...register("streetAddress2")} />
          <input type="text" placeholder="City" {...register("city")} />
          <input type="text" placeholder="State" {...register("state")} />
          <input type="text" placeholder="Zip Code" {...register("zipCode")} />
          
          {/* Country dropdown using the countries-list library */}
          <select name="country" {...register("country")} required>
            <option value="">Select Country</option>
            {countryList.map((country, index) => (
              <option key={index} value={country.name}>
                {country.name}
              </option>
            ))}
          </select>
        </div>

        <div className="name-input address">
          <input type="email" placeholder="myname@example.com" {...register("email")} required />
          <input type="tel" placeholder="(000) 000-0000" {...register("telephone")} required />
          <input type="url" placeholder="LinkedIn" {...register("linkedin")} />
        </div>

        <div className="name-input">
          <input type="date" placeholder="Start date" {...register("startDate")} required />
          <select name="position" {...register("position")} required>
            <option value="">Position applied</option>
            <option value="Sales Rep">Sales Rep</option>
            <option value="Market analyst">Market analyst</option>
            <option value="Market analyst">Data entry</option>
          </select>
        </div>

        <div className="name-input">
          <textarea name="skills" id="skills" cols="100" rows="10" placeholder="Skills" {...register("skills")} />
        </div>

        <div className="name-input">
          <label htmlFor="files">Upload resume</label>
          <input type="file" name="files" {...register("resume")} />
        </div>

        <div className="name-input">
          <textarea name="cover-letter" id="cover-letter" cols="100" rows="10" placeholder="Cover Letter" {...register("coverLetter")} />
        </div>

        <button className="apply-btn" type="submit">Apply</button>

        {result && <p className='result'>{isSuccess ? "Application submitted successfully!" : "Submission failed: " + result}</p>}
      </form>
    </div>
  );
}
export default Contact;
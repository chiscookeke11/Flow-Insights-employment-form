import React from 'react';

const YearSelect = ({ onChange }) => {
  const startYear = 1970;
  const endYear = 2024;
  const years = [];

  for (let year = startYear; year <= endYear; year++) {
    years.push(year);
  }

  return (
    <select name="year" id="year" onChange={onChange} required>
      <option value="">Select Year</option>
      {years.map((year) => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
    </select>
  );
};

export default YearSelect;

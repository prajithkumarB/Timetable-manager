import React from 'react';

const FormField = ({ label, options, value, onChange, disabled }) => {
  return (
    <div className="form-group">
      <label>{label}:</label>
      <select className="form-control" value={value} onChange={onChange} disabled={disabled}>
        {options.map((option) => (
          <option key={option} value={option} disabled={option === '' && disabled}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FormField;

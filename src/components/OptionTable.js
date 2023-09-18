// OptionTable.js
import React from 'react';

const OptionTable = ({ selectedOptions }) => {
  return (
    <div>
      <h2>Selected Options</h2>
      <table>
        <thead>
          <tr>
            <th>Field</th>
            <th>Selected Option</th>
          </tr>
        </thead>
        <tbody>
          {selectedOptions.map((option, index) => (
            <tr key={index}>
              <td>Field {index + 1}</td>
              <td>{option}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OptionTable;

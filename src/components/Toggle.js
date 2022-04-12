import React from "react";
import "../infrastructure/styles/toggle.css";
export default function Toggle({ label, state, setState }) {
  return (
    <div className='container'>
      <p>{label}</p>
      <div className='checkbox'>
        <input
          type='checkbox'
          name='checkbox'
          checked={state}
          onChange={setState}
        />
        <label></label>
      </div>
    </div>
  );
}

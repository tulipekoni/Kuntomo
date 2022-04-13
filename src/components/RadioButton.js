import React, { useState } from "react";
import "../infrastructure/styles/radiobutton.css";
export default function RadioButton({ state, onClick, label }) {
  return (
    <label className='radioContainer'>
      <input
        type='radio'
        name='tyyppi'
        id={label}
        checked={state}
        onClick={(e) => onClick(label)}
      />
      <span htmlFor={label}>{label}</span>
    </label>
  );
}

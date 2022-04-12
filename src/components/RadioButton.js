import React, { useState } from "react";
import "../infrastructure/styles/radiobutton.css";
export default function RadioButton({ state, setState, label }) {
  const [value, setValue] = useState(label);
  return (
    <label>
      <input
        type='radio'
        name='tyyppi'
        id={label}
        checked={value == label}
        onChange={() => setState(value)}
      />
      <span htmlFor={label}>{label}</span>
    </label>
  );
}

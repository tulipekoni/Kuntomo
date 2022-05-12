import React, { useState, useEffect } from "react";
import { InputDiv } from "./Components";

export default function Input(props) {
  const [state, setState] = useState("");

  useEffect(() => {
    setState("");
  }, [props.disabled]);

  return (
    <InputDiv className={state}>
      <input
        className='input'
        onSelect={() => setState("input-filled")}
        onBlur={() => props.value === "" && setState("")}
        {...props}
      />
      <label className='input_label'>
        <span
          className='input_label-content'
          data-content={props.disabled ? "" : props.label}
        >
          {props.disabled ? "" : props.label}
        </span>
      </label>
    </InputDiv>
  );
}

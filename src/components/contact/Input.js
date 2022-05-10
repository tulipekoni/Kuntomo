import React, { useState, useEffect } from "react";
import styled from "styled-components";

const InputDiv = styled.div`
  font-size: 150%;
  position: relative;
  z-index: 1;
  display: inline-block;
  width: 80%;
  max-width: 600px;
  vertical-align: top;
  padding: 0 0 32px 0;
  font-family: "Poppins", sans-serif;
`;
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

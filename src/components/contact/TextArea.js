import React, { useState, useEffect } from "react";
import styled from "styled-components";

const InputDiv = styled.div`
  font-size: 150%;
  position: relative;
  z-index: 1;
  display: inline-block;
  width: 80%;
  max-width: 600px;
  font-family: "Poppins", sans-serif;

  vertical-align: top;
  padding: 0 0 32px 0;
`;
export default function TextArea(props) {
  const [state, setState] = useState("");

  useEffect(() => {
    setState("");
  }, [props.disabled]);
  return (
    <InputDiv className={state}>
      <textarea
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

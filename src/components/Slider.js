import React from "react";
import styled from "styled-components";

export default function Slider({
  min,
  max,
  title,
  value,
  setValue,
  unit,
  latter = "",
}) {
  return (
    <SliderContainer>
      <Title>{title}</Title>
      <input
        type='range'
        min={min}
        max={max}
        className='slider'
        value={value}
        onChange={(a) => {
          setValue(a.target.value);
          console.log(a.target.value);
        }}
      />
      <ValueText>{value + latter}</ValueText>
      <UnitText>{unit}</UnitText>
    </SliderContainer>
  );
}

const SliderContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin-bottom: 60px;
`;
const Title = styled.h2`
  margin-bottom: 48px;
`;
const ValueText = styled.h2`
  margin: 0;
  margin-top: 32px;
`;
const UnitText = styled.h2`
  margin: 0;
`;

import React from 'react'
import styled from "styled-components";
import { theme } from '../../infrastructure/theme';

export default function Yritystieto({h2, h6}) {
  return (
      <div>
        <H2>{h2}</H2>
        <H6>{h6}</H6>
      </div>    
  )
}

const H2 = styled.h2`
  font-size: 40px;
  color: ${theme.colors.primary};
  margin: 0;
  text-align: left;
`;

const H6 = styled.h6`
  font-size: 14px;
  margin: 0;
`;
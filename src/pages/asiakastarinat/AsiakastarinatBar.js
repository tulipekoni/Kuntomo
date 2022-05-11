import React from 'react'
import { SectionRow } from '../../components/Section'
import Yritystieto from './Yritystieto'
import styled from "styled-components";
import { theme } from '../../infrastructure/theme';

export default function AsiakastarinatBar() {
  return (
    <SectionRowJustifyContent>
        <Yritystieto h2="3" h6="Vuoden kokemus"/>
        <Yritystieto h2="5000+" h6="Tyytyväistä asiakasta"/>
        <Yritystieto h2="25+" h6="Personal traineria"/>
    </SectionRowJustifyContent>
  )
}

const SectionRowJustifyContent = styled.div`
  background-color: ${theme.colors.lightgray};
  justify-content: space-evenly;
  display: flex;
  flex-direction: row;
  padding: 32px;
  position: relative;
`;

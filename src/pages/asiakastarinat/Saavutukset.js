import React from "react";
import Yritystieto from "./Yritystieto";
import styled from "styled-components";
import { theme } from "../../infrastructure/theme";
import { device } from "../../infrastructure/media-queries/device";

export default function Saavutukset() {
  return (
    <SectionRowJustifyContent>
      <Yritystieto h2='3' h6='Vuoden kokemus' />
      <Yritystieto h2='5000+' h6='Tyytyväistä asiakasta' />
      <Yritystieto h2='25+' h6='Personal traineria' />
    </SectionRowJustifyContent>
  );
}

const SectionRowJustifyContent = styled.div`
  background-color: ${theme.colors.lightgray};
  justify-content: space-evenly;
  flex-direction: row;
  padding: 32px;
  position: relative;
  display: none;
  @media ${device.tablet} {
    display: flex;
  }
`;

import React from "react";
import styled from "styled-components";
import { SectionRow } from "../../components/Section";
import ImageSVG from "../../components/image-svg";
import Button from "../../components/Button";
import { device } from "../../infrastructure/media-queries/device";

export default function LinkkiLaskuriin() {
  return (
    <SectionRow>
      <TextContainer>
        <h1>Apua ammattiuralle ja kovemmille harjoittelijoille</h1>
        <p>
          Onko haaveissa kilpaura tai haluatko itsellesi ravintosuunnittelua?
          Riveistämme löytyy varmasti valmentajia, jotka voivat auttaa juuri
          sinua! Käy tutustumassa laskuriimme, joka osaa tarjota sinulle juuri
          oikean valmentajan sopivaan hintaan.
        </p>
        <div>
          <Button />
        </div>
      </TextContainer>
      <ImageSVG i={2} />
    </SectionRow>
  );
}

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;

  @media ${device.tablet} {
    align-items: flex-start;
  }
`;

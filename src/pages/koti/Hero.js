import React from "react";
import ImageSVG from "../../components/image-svg";
import Button from "../../components/Button";
import styled from "styled-components";
import { SectionRow } from "../../components/Section";
import { device } from "../../infrastructure/media-queries/device";

export default function Hero() {
  return (
    <SectionRow>
      <TextContainer>
        <h1>Kuntosali ja kattava valmennus Oulun keskustassa!</h1>
        <p>Kauppurienkatu 12, 90100 Oulu</p>

        <Button />
      </TextContainer>

      <div style={{ flex: 1 }}>
        <ImageSVG i={0} />
      </div>
    </SectionRow>
  );
}

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${device.tablet} {
    align-items: flex-start;
  }
`;

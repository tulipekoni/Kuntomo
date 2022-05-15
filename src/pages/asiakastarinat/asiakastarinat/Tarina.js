import React from "react";
import styled from "styled-components";
import Hipsut from "../../../components/Hipsut";
import { device } from "../../../infrastructure/media-queries/device";
import { theme } from "../../../infrastructure/theme";

export default function Tarina({ teksti, kuva, nimi }) {
  return (
    <Container>
      <Hipsut />
      <TextContainer>
        <Paragraph>{teksti}</Paragraph>
        <NimiMobile>{nimi}</NimiMobile>
      </TextContainer>

      <ImageContainer>
        <IMG src={kuva} />
        <Nimi>{nimi}</Nimi>
      </ImageContainer>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 16px 32px;
  position: relative;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  position: relative;
  @media ${device.tablet} {
    padding: 32px;
  }
`;
const IMG = styled.img`
  width: 100px;
  border-radius: 16px;
`;
const Paragraph = styled.p`
  font-size: 14px;
`;
const Nimi = styled.p`
  margin: 0;
  color: ${theme.colors.primary};
  font-size: 14px;
  text-align: center;
`;
const NimiMobile = styled.p`
  margin: 0;
  color: ${theme.colors.primary};
  font-size: 14px;
  text-align: center;
  display: block;
  @media ${device.tablet} {
    display: none;
  }
`;
const ImageContainer = styled.div`
  display: none;
  flex-direction: column;
  margin-left: 16px;

  @media ${device.tablet} {
    display: flex;
  }
`;

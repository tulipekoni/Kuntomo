import React from "react";
import ImageSVG from "../../components/image-svg";
import Button from "../../components/Button";
import styled from "styled-components";
import { Section } from "../../components/Section";

export default function KotiHero() {
  return (
    <Section>
      <TextContainer>
        <h1>Kuntosali ja kattava valmennus Oulun keskustassa!</h1>
        <p>Kauppurienkatu 12, 90100 Oulu</p>

        <ButtonContainer>
          <Button />
        </ButtonContainer>
      </TextContainer>

      <div style={{ flex: 1 }}>
        <ImageSVG i={0} />
      </div>
    </Section>
  );
}

const ButtonContainer = styled.div``;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

import React from "react";
import ImageSVG from "../../components/image-svg";
import StarReview from "../../components/StarReview";
import styled from "styled-components";
import { device } from "../../infrastructure/media-queries/device";
import { SectionRow } from "../../components/Section";
import Button from "../../components/Button";

export default function () {
  return (
    <SectionRow>
      <div>
        <h1>Palvelumme pyörivät sinun ehdoillasi!</h1>
        <p>
          Kuuntelemme jatkuvasti asiakkaidemme toiveita ja kehitysehdotuksia.
          Meillä on ainutlaatuinen suhde jokaiseen asiakkaaseemme. Liity sinäkin
          osaksi tyytyväistä asiakaskuntaamme!
        </p>
        <StarContainer>
          <StarReview starCount={5} label='Salilehti' />
          <StarReview starCount={5} label='TrackRun magazine' />
          <StarReview starCount={4} label='GymShark' />
        </StarContainer>
      </div>

      <ImageContainer>
        <ImageSVG i={1} />
      </ImageContainer>
    </SectionRow>
  );
}
const ImageContainer = styled.div`
  flex: 1;
`;
const StarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  justify-content: space-around;
  @media ${device.tablet} {
    flex-direction: column;
  }
`;

const ButtonContainer = styled.div``;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

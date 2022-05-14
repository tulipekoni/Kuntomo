import React from "react";
import { Balls3x } from "../../../components/Ball3x";
import {
  Container,
  IMG,
  TextContainer,
  BallsContainer,
  Header,
  Teksti,
  LisaTieto,
  Hinta,
} from "./Components";

export default function LajiEsittely(props) {
  return (
    <Container reverse={props.reverse}>
      <IMG reverse={props.reverse} src={props.kuva} />
      <TextContainer reverse={props.reverse}>
        <BallsContainer>
          <Balls3x />
        </BallsContainer>
        <Header>{props.otsikko}</Header>
        <Teksti reverse={props.reverse}>{props.teksti}</Teksti>
        <LisaTieto>{props.lisätieto}</LisaTieto>
        <Hinta>{props.hinta}€/kk</Hinta>
      </TextContainer>
    </Container>
  );
}

import React from 'react'
import { Balls3x } from "../../components/Ball3x";
import Button from "../../components/Button";
import styled from "styled-components";

export default function Hintalaskuriin() {
  return (
    <SectionColumnJustifyContent>
      <BallsContainer alignEnd>
        <Balls3x/>
      </BallsContainer>
      <Header>Tahdomme sinut mukaan tyytyväiseen asiakaskuntaamme!</Header>
      <Text>Hintalaskurimme avulla voit ottaa selvää,
         millainen valmennus paketti sinulle olisi mahdollista räätälöidä.
         Laskuri suosittelee juuri sinun tarpeisiisi sopivaa valmennuksen ammattilaista.
         Voit myös kätevästi tarkastella harjoituspakettien hintoja.
      </Text>
      <ButtonContainer>
        <Button/>
      </ButtonContainer>
      <BallsContainer>
        <Balls3x/>
      </BallsContainer>
    </SectionColumnJustifyContent>
  )
}

const BallsContainer = styled.div`
  display: flex;
  justify-content: ${props => props.alignEnd ? "flex-end" : "flex-start"};
`;

const Header = styled.h1`
  text-align: center;
  padding-top: 32px;
`;

const Text = styled.p`
  text-align: center;
  font-size: 14px;
`;

const SectionColumnJustifyContent = styled.div`
  justify-content: space-evenly;
  display: flex;
  flex-direction: column;
  padding: 32px;
  position: relative;
`;

const ButtonContainer = styled.div`
  justify-content: center;
  display: flex;
  padding: 32px;
`;



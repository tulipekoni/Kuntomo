import React from "react";
import { Balls3x } from "../../components/Ball3x";
import Button from "../../components/Button";
import styled from "styled-components";
import { SectionColumn } from "../../components/Section";

export default function LinkkiLaskuriin() {
  return (
    <SectionColumn>
      <Header>Tahdomme sinut mukaan tyytyväiseen asiakaskuntaamme!</Header>
      <Text>
        Hintalaskurimme avulla voit ottaa selvää, millainen valmennus paketti
        sinulle olisi mahdollista räätälöidä. Laskuri suosittelee juuri sinun
        tarpeisiisi sopivaa valmennuksen ammattilaista. Voit myös kätevästi
        tarkastella harjoituspakettien hintoja.
      </Text>
      <ButtonContainer>
        <Button />
      </ButtonContainer>
      <BG />
    </SectionColumn>
  );
}

const BG = () => (
  <>
    <Balls3x style={{ position: "absolute", top: 0, right: 0 }} />
    <Balls3x style={{ position: "absolute", bottom: 0, left: 0 }} />
  </>
);

const Header = styled.h1`
  text-align: center;
  padding-top: 32px;
`;

const Text = styled.p`
  text-align: center;
  font-size: 14px;
`;

const ButtonContainer = styled.div`
  justify-content: center;
  display: flex;
  padding: 32px;
`;

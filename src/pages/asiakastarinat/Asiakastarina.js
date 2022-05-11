import React from 'react'
import styled from 'styled-components';
import Hipsut from '../../components/Hipsut'
import { SectionRow } from '../../components/Section'
import { theme } from '../../infrastructure/theme';

export default function Asiakastarina( {tarina, kuva, nimi} ) {
  return (
    <SectionRowJustifyContent>
        <Hipsut/>
        <Tarina>{tarina}</Tarina>
        <ImageContainer>
            <IMG src={kuva}></IMG>
            <Nimi>{nimi}</Nimi>
        </ImageContainer>
    </SectionRowJustifyContent>
  )
}
const SectionRowJustifyContent = styled.div`
  justify-content: space-evenly;
  display: flex;
  flex-direction: row;
  padding: 32px;
  position: relative;
`;

const IMG = styled.img`
  width: 140px
`;
const Tarina = styled.p`
  font-size: 14px;
`;
const Nimi = styled.p`
  margin: 0;
  color: ${theme.colors.primary};
  font-size: 14px;
  text-align: center;
`;
const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 16px;
`;

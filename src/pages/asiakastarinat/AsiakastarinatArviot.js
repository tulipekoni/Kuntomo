import React from 'react'
import styled from "styled-components";
import { SectionColumn } from '../../components/Section'
import Asiakastarina from './Asiakastarina'
import ErnaKuva from './AsiakastarinaKuvat/erna.jpg'

export default function AsiakastarinatArviot() {
    var tarina1 = "Tein tyypillisen virheen ja treenini oli pitkään liian yksipuolista. Kuntomon valmentan kanssa laitettiin uusi ohjelma kuntoon tulostakin alkoi syntymään. Ohjauspaketin sai opiskelijalle sopivaan hintaan."
    var tarina2 = "Kerkesin käydä muutamalla salilla, mutta Kuntomolla käynnin jälkeen ei tarvinnut enää etsiä. Parhaat valmentajat mitä kaupungista löytyy! Treeneissä aina tekemisen meiniki, mutta rennossa ilmapiirissä. Salilla käynti on uusi päivän kohokohta!"
    var tarina3 = "Istumatyössä selkä saattaa olla tiukalla. Kuntomon valmentajan kanssa löydettiin sopivat liikkeet ja harjoitustavat. Selkävaivoista ei ole ollut enää merkkiäkään. Samalla katsottiin ruokavalio kuntoon, näkyy muuten äkkiä vaa’alla ja omassa jaksamisessa!"
    var tarina4 = "Päätin viime vuonna, että ensi kesänä osallistun Berliinin maratonille. Onneksi otin kuntomon kestävyysharjoitteluvalmennuksen. Tehtiin mulle sopiva ohjelma ja sain kullanarvoisia vinkkejä juoksua tukevasta saliharjoittelusta."
  return (
    <SectionColumnJustifyContent>
        <Header>Kerro mitä asiakkaillamme on sanottavana</Header>
        <Asiakastarina tarina={tarina1} kuva={require("./AsiakastarinaKuvat/make.jpg")} nimi="Make, 24"/>
        <Asiakastarina tarina={tarina2} kuva={require("./AsiakastarinaKuvat/erna.jpg")} nimi="Erna, 30"/>
        <Asiakastarina tarina={tarina3} kuva={require("./AsiakastarinaKuvat/pasi.jpg")} nimi="Pasi, 44"/>
        <Asiakastarina tarina={tarina4} kuva={require("./AsiakastarinaKuvat/birgitta.jpg")} nimi="Birgitta, 51"/>
    </SectionColumnJustifyContent>
  )
}

const Header = styled.h1`
  padding-bottom: 32px;
`;
const SectionColumnJustifyContent = styled.div`
  justify-content: space-evenly;
  display: flex;
  flex-direction: column;
  padding: 32px;
  position: relative;
`;

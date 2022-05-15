import React from "react";
import styled from "styled-components";
import { SectionColumn } from "../../../components/Section";
import Tarina from "./Tarina";

export default function Tarinat() {
  return (
    <SectionColumn>
      <Header>Katso mitä asiakkaillamme on sanottavana</Header>
      {tarinat.map((tarina, index) => (
        <Tarina
          key={index}
          teksti={tarina.teksti}
          kuva={tarina.kuva}
          nimi={tarina.nimi}
        />
      ))}
    </SectionColumn>
  );
}

const Header = styled.h1`
  padding-bottom: 32px;
  text-align: center;
`;

const tarinat = [
  {
    teksti:
      "Tein tyypillisen virheen ja treenini oli pitkään liian yksipuolista. Kuntomon valmentan kanssa laitettiin uusi ohjelma kuntoon tulostakin alkoi syntymään. Ohjauspaketin sai opiskelijalle sopivaan hintaan.",
    kuva: require("./kuvat/make.jpg"),
    nimi: "Make, 24",
  },
  {
    teksti:
      "Kerkesin käydä muutamalla salilla, mutta Kuntomolla käynnin jälkeen ei tarvinnut enää etsiä. Parhaat valmentajat mitä kaupungista löytyy! Treeneissä aina tekemisen meiniki, mutta rennossa ilmapiirissä. Salilla käynti on uusi päivän kohokohta!",
    kuva: require("./kuvat/erna.jpg"),
    nimi: "Erna, 30",
  },
  {
    teksti:
      "Istumatyössä selkä saattaa olla tiukalla. Kuntomon valmentajan kanssa löydettiin sopivat liikkeet ja harjoitustavat. Selkävaivoista ei ole ollut enää merkkiäkään. Samalla katsottiin ruokavalio kuntoon, näkyy muuten äkkiä vaa’alla ja omassa jaksamisessa!",
    kuva: require("./kuvat/pasi.jpg"),
    nimi: "Pasi, 44",
  },
  {
    teksti:
      "Päätin viime vuonna, että ensi kesänä osallistun Berliinin maratonille. Onneksi otin kuntomon kestävyysharjoitteluvalmennuksen. Tehtiin mulle sopiva ohjelma ja sain kullanarvoisia vinkkejä juoksua tukevasta saliharjoittelusta.",
    kuva: require("./kuvat/birgitta.jpg"),
    nimi: "Birgitta, 51",
  },
];

import React from "react";
import { SectionColumn } from "../../../components/Section";
import { HeaderCenter, Paragraph } from "./Components";
import Laji from "./Laji";
export default function Esittelyt() {
  return (
    <SectionColumn>
      <HeaderCenter>Tarjoamme kattavaa valmennusta</HeaderCenter>
      <Paragraph>
        Löydä itsellesi sopiva laji ja halutessasi valmentaja.
      </Paragraph>
      {/* mapataan lajit */}
      {lajit.map((laji, index) => (
        <Laji
          key={index}
          reverse={index % 2 === 1} //jos mapatun lajin indexi on pariton, reverse asetetaan trueksi
          kuva={laji.kuva}
          otsikko={laji.otsikko}
          teksti={laji.teksti}
          lisätieto={laji.lisätieto}
          hinta={laji.hinta}
        />
      ))}
    </SectionColumn>
  );
}

const lajit = [
  {
    kuva: require("./kuvat/saliharjoittelu.jpg"),
    otsikko: "Saliharjoittelu",
    teksti: "Tarjoamme Oulun parhaan salin laajimmalla laitekokonaisuudella",
    lisätieto: "Sali auki 24/7!",
    hinta: 32,
  },
  {
    kuva: require("./kuvat/ryhmäliikunta.jpg"),
    otsikko: "Ryhmäliikunta",
    teksti: "Tarjolla jumppaa, joogaa ja pilatesta joka arkipäivä",
    lisätieto: "klo 12-14 ja klo 16-18",
    hinta: 40,
  },
  {
    kuva: require("./kuvat/voimaharjoittelu.jpg"),
    otsikko: "Voimaharjoittelu",
    teksti:
      "Kuntosaliltamme löytyy painot ja valmennus kovemmillekin treenaajille!",
    lisätieto: "Kuntosali + valmennus",
    hinta: 80,
  },
  {
    kuva: require("./kuvat/kestävyysharjoittelu.jpg"),
    otsikko: "Kestävyysharjoittelu",
    teksti:
      "Kuntosaliltamme löytyy valmennuksen lisäksi myös kaikki välineet kestävyysharjoitteluun!",
    lisätieto: "Kuntosali + valmennus",
    hinta: 80,
  },
];

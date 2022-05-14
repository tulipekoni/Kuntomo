import React, { useState, useEffect } from "react";
import { SectionColumn } from "../../components/Section";
import "../../infrastructure/styles/slider.css";
import styled from "styled-components";
import Slider from "../../components/Slider";
import RadioButton from "../../components/RadioButton";
import Toggle from "../../components/Toggle";
import { Balls3x } from "../../components/Ball3x";
export default function Laskuri() {
  const [kesto, setKesto] = useState(5);
  const [kerrat, setKerrat] = useState(4);
  const [laji, setLaji] = useState("Kuntosali");
  const [ravintosuunnitelma, setRavintosuunnitelma] = useState(true);
  const [hinta, setHinta] = useState(160);
  const [ohjaaja, setOhjaaja] = useState(ohjaajat[0]);

  //jos jokin tiloista muuttuu, lasketaan hinta uudelleen
  useEffect(() => {
    //muutetaan lajinimien kolmas kirjain numeroksi
    var lajiaddon = parseInt(laji.charCodeAt(2));
    //lisätään kesto ja kerrat yhteen
    var sum = parseInt(+kesto * 10 + +kerrat * 10);
    //jos ravintosuunnitelma on valittuna, lisätään 20 laskuun
    var ravinto = ravintosuunnitelma ? 20 : 0;
    //laskutoimitus
    var price = Math.round(sum / 2 + (lajiaddon % 12) * 8 + ravinto);
    setHinta(price);
    //moduloidaan ohjaajat ja asetetaan se stateen
    setOhjaaja(ohjaajat[price % 7]);
  }, [kesto, kerrat, laji, ravintosuunnitelma]);

  return (
    <SectionColumn>
      <Slider
        title='Kuinka monta kertaa viikossa haluat harjoitella?'
        unit='kertaa'
        value={kerrat}
        setValue={setKerrat}
        min={1}
        max={7}
      />

      <Slider
        title='Kuinka pitkiä treenejä haluat tehdä?'
        latter='0'
        unit='minuuttia'
        value={kesto}
        setValue={setKesto}
        min={2}
        max={8}
      />
      <form>
        {/* mapataan lajit */}
        {lajit.map((value, index) => (
          <RadioButton
            label={value}
            key={index}
            checked={laji === lajit[index]}
            onClick={setLaji}
          />
        ))}
      </form>
      <Toggle
        label='Haluatko kehityksen mukaisen ravintosuunnitelman?'
        state={ravintosuunnitelma}
        setState={() => setRavintosuunnitelma((v) => !v)}
      />
      <Text>
        Hintasi on:{" "}
        <Price>
          {hinta}€<Unit>/kk</Unit>
        </Price>
      </Text>
      <Text>
        Ohjaajasi on: <Trainer>{ohjaaja}</Trainer>
      </Text>
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

const Text = styled.p`
  font-size: 16px;
`;
const Price = styled.span`
  font-size: 56px;
  margin-left: 44px;
`;
const Unit = styled.span`
  font-size: 28px;
`;
const Trainer = styled.span`
  font-size: 20px;
  margin-left: 44px;
`;

const Line = styled.hr`
  border: 1px solid red;
  width: 100%;
`;
const lajit = [
  "Kuntosali",
  "Kestävyysharjoittelu",
  "Ryhmäliikunta",
  "Voimaharjoittelu",
  "Muu",
];
const ohjaajat = [
  "Marko Savolainen",
  "Inkeri Määttä",
  "Ripe Rautaleuka",
  "Ninni Merikylä",
  "Joona Kotaniemi",
  "Unelma Sirpaleena",
  "Heidi Lapaluu",
];

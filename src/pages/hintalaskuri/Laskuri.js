import React, { useState } from "react";
import { SectionColumn } from "../../components/Section";
import "../../infrastructure/styles/slider.css";
import styled from "styled-components";
import Slider from "../../components/Slider";
import RadioButton from "../../components/RadioButton";
export default function Laskuri() {
  const [kesto, setKesto] = useState(50);
  const [kerrat, setKerrat] = useState(4);
  const [laji, setLaji] = useState("kuntosali");

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
        unit='minuuttia'
        value={kesto}
        setValue={setKesto}
        min={20}
        max={80}
      />
      <div>
        {lajit.map((value, index) => (
          <RadioButton
            label={value}
            key={index}
            checked={laji === lajit[index]}
            onChange={(a) => setLaji(lajit[index])}
          />
        ))}
      </div>
    </SectionColumn>
  );
}

const lajit = [
  "kuntosali",
  "Kestävyysharjoittelu",
  "Ryhmäliikunta",
  "Voimaharjoittelu",
  "Muu",
];
const RadioButtonContainer = styled.section`
  display: flex;
  flex-direction: row;
  padding: 64px;
`;

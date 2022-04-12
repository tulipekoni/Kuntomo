import React from "react";
import ImageSVG from "../../components/image-svg";
import { SectionRow } from "../../components/Section";

export default function HintalaskuriHero() {
  return (
    <SectionRow>
      <div>
        <h1>Tervetuloa hintalaskuriin!</h1>
        <p>
          Kuka voisi olla juuri sinulle sopiva valmentaja? Entä kuinka paljon se
          kustantaisi? Tämä laskuri vastaa jokaiseen kysymykseesi! Syötä tietosi
          alas ja anna meidän tarjota sinulle paras mahdollinen ratkaisu.
        </p>
      </div>

      <div style={{ flex: 1 }}>
        <ImageSVG i={2} />
      </div>
    </SectionRow>
  );
}

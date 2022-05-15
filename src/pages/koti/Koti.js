import React from "react";
import PageContainer from "../../components/PageContainer";
import Hero from "./Hero";
import Esittelyt from "./esittelyt/Esittelyt";
import LinkkiLaskuriin from "./LinkkiLaskuriin";
import Contact from "../../components/contact";

export default function Koti() {
  return (
    <PageContainer>
      <Hero />
      <Esittelyt />
      <LinkkiLaskuriin />
      <Contact />
    </PageContainer>
  );
}

import React from "react";
import Contact from "../../components/contact";
import PageContainer from "../../components/PageContainer";
import Arviot from "./asiakastarinat/Tarinat";
import Saavutukset from "./Saavutukset";
import Hero from "./Hero";
import LinkkiLaskuriin from "./LinkkiLaskuriin";

export default function Asiakastarinat() {
  return (
    <PageContainer>
      <Hero />
      <Saavutukset />
      <Arviot />
      <LinkkiLaskuriin />
      <Contact />
    </PageContainer>
  );
}

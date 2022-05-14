import React from "react";
import PageContainer from "../../components/PageContainer";
import KotiHero from "./KotiHero";
import LajiEsittelyt from "./LajiEsittely/KotiLajiEsittelyt";
import LinkkiHintalaskuriin from "./LinkkiHintalaskuriin";
import Contact from "../../components/contact";

export default function Koti() {
  return (
    <PageContainer>
      <KotiHero />
      <LajiEsittelyt />
      <LinkkiHintalaskuriin />
      <Contact />
    </PageContainer>
  );
}

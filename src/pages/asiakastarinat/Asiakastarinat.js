import React from "react";
import Contact from "../../components/contact";
import PageContainer from "../../components/PageContainer";
import AsiakastarinatArviot from "./AsiakastarinatArviot";
import AsiakastarinatBar from "./AsiakastarinatBar";
import AsiakastarinatHero from "./AsiakastarinatHero";
import AsiastarinatHintalaskuriEsittely from "./AsiakastarinatHintalaskuriEsittely";

export default function Asiakastarinat() {
  return (
    <PageContainer>
      <AsiakastarinatHero />
      <AsiakastarinatBar />
      <AsiakastarinatArviot />
      <AsiastarinatHintalaskuriEsittely />
      <Contact />
    </PageContainer>
  );
}

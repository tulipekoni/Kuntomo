import React from "react";
import PageContainer from "../../components/PageContainer";
import HintalaskuriHero from "./HintalaskuriHero";
import Laskuri from "./Laskuri";

export default function Hintalaskuri() {
  return (
    <PageContainer>
      <HintalaskuriHero />
      <Laskuri />
    </PageContainer>
  );
}

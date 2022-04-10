import React from "react";
import ImageSVG from "../../components/image-svg";

export default function () {
  return (
    <div style={{ display: "flex", flexDirection: "row", padding: 64 }}>
      <div>
        <h1>Palvelumme pyörivät sinun ehdoillasi!</h1>
        <p>
          Kuuntelemme jatkuvasti asiakkaidemme toiveita ja kehitysehdotuksia.
          Meillä on ainutlaatuinen suhde jokaiseen asiakkaaseemme. Liity sinäkin
          osaksi tyytyväistä asiakaskuntaamme!
        </p>
      </div>

      <div style={{ flex: 1 }}>
        <ImageSVG i={1} />
      </div>
    </div>
  );
}

import React, { useState } from "react";
import styled from "styled-components";
import Input from "./Input";
import TextArea from "./TextArea";
import "../../infrastructure/styles/text-fields.css";
import { SectionColumn } from "../Section";
export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  async function Submit(event) {
    event.preventDefault();
    setSent(true);
    fetch("https://formsubmit.co/ajax/7f61bc3f64a6733680f900d4083c410a", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        message: message,
      }),
    }).catch((error) => console.log("Error at submit"));
  }

  function disableButton() {
    if (sent) {
      return false;
    }
    return sent || name === "" || email === "" || message === "";
  }
  return (
    <Container onSubmit={Submit}>
      <HeaderContainer>
        <h2 style={{ fontWeight: "bold" }}>Kiinnostaako valmennus?</h2>
        <p style={{ textAlign: "center" }}>
          Täytä lomake ja mainitse siinä lajisi ja mahdolliset toiveet
          valmentajaan liittyen. Olemme sinuun yhteydessä pikimmiten!
        </p>
      </HeaderContainer>
      <Input
        label='Nimi'
        type='text'
        name='nimi'
        required
        onChange={(event) => setName(event.target.value)}
        value={name}
        disabled={sent}
      />
      <Input
        label='sähköposti'
        type='email'
        name='email'
        required
        onChange={(event) => setEmail(event.target.value)}
        value={email}
        disabled={sent}
      />
      <TextArea
        label='Vapaa viesti'
        required
        onChange={(event) => setMessage(event.target.value)}
        style={{ resize: "none" }}
        rows='8'
        value={message}
        disabled={sent}
      />
      <button
        style={{ cursor: sent ? "auto" : "pointer" }}
        type='submit'
        onClick={Submit}
        disabled={disableButton()}
      >
        {sent ? "Viesti lähetetty!" : "Lähetä viesti"}
      </button>
      <p
        style={{
          fontSize: 20,
          margin: 2,
          width: "80%",
          textAlign: "center",
          color: sent ? "#bdbdbd" : "#fff",
        }}
      >
        Kiitos yhteydenotosta! Olemme sinuun yhteydessä sähköpostilla
        mahdollisimman pian!
      </p>
    </Container>
  );
}
const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  font-family: "Poppins", sans-serif;
`;
const HeaderContainer = styled.form`
  padding: 20px;
  width: 80%;
  text-align: center;
`;

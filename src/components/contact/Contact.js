import React, { useState } from "react";
import styled from "styled-components";
import { PageHolder } from "../../components/global/PageHolder";
import "../../styles/input.css";
import Input from "./Input";
import TextArea from "./TextArea";

const InputContainer = styled.form`
  width: 80%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 24px;
  @media (max-width: 1024px) {
    width: 100%;
    padding: 8px;
  }
`;
const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  justify-content: center;
`;

const H4 = styled.h4`
  margin-bottom: 100px;
  @media (max-width: 1024px) {
    margin-bottom: 54px;
  }
`;
export default function Contact({ id }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [sent, setSent] = useState(false);

  function disableButton() {
    if (sent) {
      return false;
    }
    return sent || name === "" || email === "" || text === "";
  }
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
        message: text,
      }),
    }).catch((error) => console.log("Error at submit"));
  }

  return (
    <PageHolder id={id}>
      <h1>Contact</h1>
      <H4>Get to know me properly.</H4>
      <Container>
        <InputContainer onSubmit={Submit}>
          <Input
            label='My Name'
            type='text'
            name='name'
            required
            onChange={(event) => setName(event.target.value)}
            value={name}
            disabled={sent}
          />
          <Input
            label='My Email'
            type='email'
            name='email'
            required
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            disabled={sent}
          />
          <TextArea
            label='Your Message'
            required
            onChange={(event) => setText(event.target.value)}
            style={{ resize: "none" }}
            rows='8'
            value={text}
            disabled={sent}
          />
          <button
            style={{ cursor: sent ? "auto" : "pointer" }}
            type='submit'
            onClick={Submit}
            disabled={disableButton()}
          >
            {sent ? "Message Sent!" : "Send Message"}
          </button>
          <p
            style={{
              fontSize: 20,
              margin: 2,
              color: sent ? "#bdbdbd" : "#fff",
            }}
          >
            Thanks for contacting me! I'll respond as soon as possible.
          </p>
        </InputContainer>
      </Container>
    </PageHolder>
  );
}

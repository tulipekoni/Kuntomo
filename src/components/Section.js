import React from "react";
import styled from "styled-components";
export default function Section(props) {
  return <Container>{props.children}</Container>;
}

const Container = styled.section`
  display: flex;
  flex-direction: row;
  padding: 64px;
`;

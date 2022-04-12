import React from "react";
import styled from "styled-components";
export function SectionRow(props) {
  return <ContainerRow>{props.children}</ContainerRow>;
}
export function SectionColumn(props) {
  return <ContainerColumn>{props.children}</ContainerColumn>;
}
const ContainerColumn = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 64px;
`;
const ContainerRow = styled.section`
  display: flex;
  flex-direction: row;
  padding: 64px;
`;

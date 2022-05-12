import React from "react";
import styled from "styled-components";
import { device } from "../infrastructure/media-queries/device";
export function SectionRow(props) {
  return <ContainerRow>{props.children}</ContainerRow>;
}
export function SectionColumn(props) {
  return <ContainerColumn>{props.children}</ContainerColumn>;
}
const ContainerColumn = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 64px 8px;

  @media ${device.tablet} {
    padding: 64px;
  }

  align-items: center;
`;
const ContainerRow = styled.section`
  display: flex;
  flex-direction: row;
  position: relative;
  padding: 64px 8px;

  @media ${device.tablet} {
    padding: 64px;
  }
`;

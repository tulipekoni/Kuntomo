import React from "react";
import styled from "styled-components";
import { device } from "../../infrastructure/media-queries/device";
import Image1 from "./Image1";
import Image2 from "./Image2";
import Image3 from "./Image3";

export default function ImageSVG({ i }) {
  switch (i) {
    case 2:
      return (
        <Cont>
          <Image3 />
        </Cont>
      );
    case 1:
      return (
        <Cont>
          <Image2 />
        </Cont>
      );
    default:
      return (
        <Cont>
          <Image1 />
        </Cont>
      );
  }
}

const Cont = styled.div`
  display: none;
  margin-left: 64px;
  @media ${device.tablet} {
    display: block;
  }
`;

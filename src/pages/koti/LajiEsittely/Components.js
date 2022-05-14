import styled from "styled-components";
import { theme } from "../../../infrastructure/theme";
import { device } from "../../../infrastructure/media-queries/device";

export const BallsContainer = styled.div`
  display: none;
  @media ${device.tablet} {
    display: block;
  }
`;

export const Container = styled.div`
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 24px 0;
  @media ${device.tablet} {
    flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${device.tablet} {
    align-items: ${(props) => (props.reverse ? "flex-start" : "flex-end")};
  }
`;

export const IMG = styled.img`
  width: 250px;
  border-radius: 60px;
  margin: 0;
  @media ${device.tablet} {
    margin-right: ${(props) => (props.reverse ? 0 : 50)}px;
    margin-left: ${(props) => (props.reverse ? 50 : 0)}px;
  }
`;

export const Teksti = styled.p`
  margin: 0;

  @media ${device.tablet} {
    text-align: ${(props) => (props.reverse ? "left" : "right")};
  }
`;
export const Header = styled.h1`
  margin: 10px 0;
`;
export const LisaTieto = styled.p`
  color: ${theme.colors.primary};
  margin: 0;
`;

export const Hinta = styled.h1`
  color: ${theme.colors.primary};
  margin: 0;
`;
export const HeaderCenter = styled.h1`
  text-align: center;
`;
export const Paragraph = styled.p`
  text-align: "center";
  padding-bottom: 64px;
`;

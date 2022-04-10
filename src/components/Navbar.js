import React from "react";
import { NavLink } from "react-router-dom";
import { LogoButton } from "./LogoButton";
import styled from "styled-components";
import { device } from "../infrastructure/media-queries/device";
import { theme } from "../infrastructure/theme";
export default function Navbar() {
  return (
    <NavHeader>
      <Container>
        <LogoButton />
        <NavLink
          to='/'
          style={({ isActive }) => {
            return {
              margin: "1rem",
              textDecoration: "none",
              color: theme.colors.black,
              fontFamily: "Poppins",
              fontWeight: isActive ? "bold" : "normal",
            };
          }}
        >
          Koti
        </NavLink>
        <NavLink
          to='/asiakastarinat'
          style={({ isActive }) => {
            return {
              margin: "1rem",
              textDecoration: "none",
              color: theme.colors.black,
              fontFamily: "Poppins",
              fontWeight: isActive ? "bold" : "normal",
            };
          }}
        >
          Asiakastarinat
        </NavLink>
        <NavLink
          to='/hintalaskuri'
          style={({ isActive }) => {
            return {
              margin: "1rem",
              textDecoration: "none",
              color: theme.colors.black,
              fontFamily: "Poppins",
              fontWeight: isActive ? "bold" : "normal",
            };
          }}
        >
          Hintalaskuri
        </NavLink>
      </Container>
    </NavHeader>
  );
}

const NavHeader = styled.nav`
  border: none 0;
  border-radius: 0;
  margin: 0;
  padding: 0;
  position: relative;
  z-index: 99;
  display: flex;
  justify-content: center;
  margin: 16px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  flex: 1;
  justify-content: space-around;
  @media ${device.laptop} {
    max-width: 800px;
  }
`;

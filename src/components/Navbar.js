import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { LogoButton } from "./LogoButton";
import styled from "styled-components";
import { device } from "../infrastructure/media-queries/device";
import { theme } from "../infrastructure/theme";
export default function Navbar() {
  const location = useLocation();
  return (
    <NavHeader>
      <Container>
        <LogoButton />
        <NavigationLink
          to='/'
          active={location && location.pathname === "/" ? true : false}
        >
          Koti
        </NavigationLink>
        <NavigationLink
          to='/asiakastarinat'
          active={
            location && location.pathname === "/asiakastarinat" ? true : false
          }
        >
          Asiakastarinat
        </NavigationLink>
        <NavigationLink
          to='/hintalaskuri'
          active={
            location && location.pathname === "/hintalaskuri" ? true : false
          }
        >
          Hintalaskuri
        </NavigationLink>
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
  margin: 0px;
  @media ${device.mobileL} {
    margin: 16px;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  align-items: center;
  flex: 1;
  justify-content: space-around;
  @media ${device.laptop} {
    max-width: 800px;
  }
`;
const NavigationLink = styled(NavLink)`
  font-size: 11px;
  margin: 0;
  text-decoration: none;
  color: ${theme.colors.black};
  font-family: Poppins;
  font-weight: ${(props) => (props.active ? "bold" : "normal")};

  @media ${device.mobileL} {
    font-size: 16px;
    margin: 1rem;
  }
`;

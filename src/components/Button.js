import React, { useState } from "react";
import { Link } from "react-router-dom";
import { theme } from "../infrastructure/theme";

export default function Button() {
  const [hover, setHover] = useState(false);
  return (
    <Link
      to='/hintalaskuri'
      style={linkStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      Tutustu hintalaskuriin
      <Chevron hover={hover} />
    </Link>
  );
}
const linkHoverStyle = {
  paddingLeft: 18,
  paddingTop: 20,
  paddingRight: 18,
  paddingBottom: 20,
};
const linkStyle = {
  backgroundColor: theme.colors.primary,
  paddingLeft: 18,
  paddingTop: 14,
  paddingRight: 18,
  paddingBottom: 14,
  textDecoration: "none",
  color: theme.colors.white,
  fontFamily: "Poppins",
  display: "flex",
  width: 210,
  borderRadius: 10,
  fontSize: 16,
  justifyContent: "space-between",
  alignItems: "center",
  position: "relative",
  transitionDuration: "100ms",
};

const Chevron = ({ hover }) => {
  return (
    <svg
      style={{
        position: "absolute",
        transitionDuration: "100ms",
        right: hover ? 18 : 28,
      }}
      width='9'
      height='15'
      viewBox='0 0 9 15'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M0.999939 0.99994L8.07104 7.36227L0.999939 13.7246'
        stroke='white'
        strokeWidth='1.40424'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

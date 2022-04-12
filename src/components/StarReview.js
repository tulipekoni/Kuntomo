import React from "react";
import styled from "styled-components";
import { device } from "../infrastructure/media-queries/device";
export default function StarReview({ starCount, label }) {
  return (
    <Container>
      <div>
        {[...Array(starCount)].map(() => {
          return <Star hide={false} />;
        })}
      </div>
      <Label marginLeft={5 - starCount}>{label}</Label>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0;
  flex-direction: column;
  @media ${device.tablet} {
    flex-direction: row;
  }
`;
const Label = styled.p`
  line-height: 0;
  margin-left: 0;
  @media ${device.tablet} {
    margin-left: ${(props) => props.marginLeft * 22 + 8}px;
  }
`;

const Star = ({ hide }) => {
  return (
    <svg
      width='18'
      height='17'
      viewBox='0 0 18 17'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      style={{ margin: 2, paddingBottom: 4 }}
    >
      <path
        d='M9.24002 1.22668L11.6708 6.15122L17.1067 6.94575L13.1734 10.7768L14.1016 16.1891L9.24002 13.6324L4.37842 16.1891L5.30669 10.7768L1.37335 6.94575L6.80922 6.15122L9.24002 1.22668Z'
        fill={hide ? "fff" : "#8A6FFF"}
        stroke={hide ? "fff" : "#8A6FFF"}
        strokeWidth='1.57333'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

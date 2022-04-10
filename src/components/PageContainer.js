import React from "react";
import styled from "styled-components";

export default function PageContainer({ children }) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 800px;
`;

import styled from "styled-components";
export const Container = styled.main`
  height: 100%;
  width: 100%;
  background-color: #fff;
  color: #333;
  display: flex;
  font-family: "Segoe UI";
  flex-direction: column;
  align-items: center;
  padding-bottom: 16px;
`;

export const Form = styled.form`
  width: 80%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 24px;
  overflow: hidden;

  @media (max-width: 1024px) {
    width: 100%;
    padding: 8px;
    padding-bottom: 0;
    padding-top: 20px;
  }
  padding-bottom: 0;
`;
export const InputDiv = styled.div`
  font-size: 150%;
  position: relative;
  z-index: 1;
  display: inline-block;
  width: 100%;
  max-width: 800px;
  align-self: center;
  vertical-align: top;
  padding: 0 0 64px 0;
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 800px;
  justify-content: space-between;
  align-self: center;
  margin-top: 32px;
`;
export const ButtonContainer = styled.div`
  width: 100%;
  align-self: center;
  max-width: 800px;
`;

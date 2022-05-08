import styled from "styled-components";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-top: 1px solid #e0dcdc;
  bottom: 0;
  width: 100%;
  @media only screen and (min-width: 650px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 90px;
  }
`;
const StyledButton = styled.button`
  border: 0;
  margin-top: 12px;
  background-color: white;
  font-size: 12px;
  font-family: HelveticaNeue-thin;
  @media (min-width: 769px) {
    font-size: 20px;
  }
`;
export { StyledButton, Wrapper };

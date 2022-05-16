import styled from "styled-components";
import Popup from "reactjs-popup";
const Button = styled.button`
  background-color: #ffffff;
  border: 0;
  padding: 8px 1px;
  cursor: pointer;
`;
const Wrapper = styled.div`
  background-color: #ffffff;
  width: 100%;
  height: 500vh;
  @media (min-width: 769px) {
    background-color: rgba(0, 0, 3, 0.5);
    width: 100vw;
  }
`;

const StyledPopup = styled(Popup)`
  width: 100%;
`;
export { Button, Wrapper, StyledPopup };

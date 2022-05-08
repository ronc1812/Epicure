import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ButtonChef,
  ButtonRes,
  Close,
  Navbar,
  StyledButton,
  Wrapper,
} from "./style";
const NavarButtons: React.FC<{ close: () => void }> = (props) => {
  const navigator = useNavigate();
  const navigatorRes = () => {
    navigator("/restaurants");
  };
  const navigatorChefs = () => {
    navigator("/");
  };
  return (
    <div>
      <Navbar>
        <Close onClick={props.close}>&times;</Close>
      </Navbar>
      <ButtonChef onClick={navigatorChefs}>Chefs</ButtonChef>
      <br />
      <ButtonRes onClick={navigatorRes}> All Restaurants</ButtonRes>

      <Wrapper>
        <StyledButton>Contact us</StyledButton>
        <StyledButton>Terms Of Use</StyledButton>
        <StyledButton>Privacy Policy</StyledButton>
      </Wrapper>
    </div>
  );
};

export default NavarButtons;

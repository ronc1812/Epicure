import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Navbar = styled.div`
  @media (max-width: 768px) {
    display: grid;
    width: 390px;
    height: 50px;
    box-shadow: 0px 2px 3px 0 rgba(0, 0, 0, 0.05);
  }
`;
const Close = styled.a`
  @media (max-width: 768px) {
    font-size: 30px;
    margin-left: 6%;
    margin-top: 1%;
  }
`;
const ButtonChef = styled.button`
  @media (max-width: 768px) {
    font-size: 20px;
    border: 0;
    background-color: white;
    margin-left: 40%;
    font-family: HelveticaNeue;
    margin-top: 10%;
  }
`;
const ButtonRes = styled.button`
  @media (max-width: 768px) {
    font-size: 20px;
    border: 0;
    background-color: white;
    margin-left: 30%;
    font-family: HelveticaNeue;
    margin-top: 10%;
    margin-bottom: 10%;
  }
`;
const NavarButtons: React.FC<{ close: () => void }> = (props) => {
  const navigator = useNavigate();
  const navigatorRes = () => {
    navigator("/restaurants");
  };
  const navigatorChefs = () => {
    navigator("/");
  };
  const Wrapper = styled.div`
    @media (max-width: 768px) {
      display: grid;
      grid-template-areas:
        "a"
        "b"
        "c";
      background-color: white;
      border-top: 1px solid #cdc9c9;
      bottom: 0;
      width: 70%;
      margin-left: 15%;
      margin-top: 10%;
    }
  `;
  const StyledButton = styled.button`
    @media (max-width: 768px) {
      border: 0;
      margin-top: 15%;
      background-color: white;
      font-size: 20px;
      font-family: HelveticaNeue-thin;
    }
  `;

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

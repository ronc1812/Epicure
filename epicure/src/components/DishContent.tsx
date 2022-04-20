import React from "react";
import styled from "styled-components";
import DishType from "../types/dishType";
import Footer from "./Footer";
const Close = styled.a`
  @media (min-width: 769px) {
    color: white;
    font-size: 30px;
  }
  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const Navbar = styled.div`
  @media (max-width: 768px) {
    display: grid;
    width: 390px;
    height: 50px;
    box-shadow: 0px 2px 3px 0 rgba(0, 0, 0, 0.05);
  }
`;
const Picture = styled.img`
  @media (min-width: 769px) {
    width: 350px;
  }
  @media (max-width: 768px) {
    width: 390px;
  }
`;

const FooterDiv = styled.div`
  @media (min-width: 769px) {
    visibility: hidden;
  }
  @media (max-width: 768px) {
    visibility: visible;
  }
`;
const Wrapper = styled.div`
  @media (min-width: 769px) {
    margin-left: 40%;
  }
`;
const DishContent: React.FC<{ dish: DishType; close: () => void }> = (
  props
) => {
  const dish = props.dish;
  return (
    <Wrapper>
      <Navbar>
        <Close onClick={props.close}>&times;</Close>
      </Navbar>
      <Picture src={dish.picture} alt={dish.name} />
      <FooterDiv>
        <Footer />
      </FooterDiv>
    </Wrapper>
  );
};

export default DishContent;

import React from "react";
import styled from "styled-components";
import DishType from "../types/dishType";
import Footer from "./Footer";
const Close = styled.a`
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
  @media (max-width: 768px) {
    width: 390px;
  }
`;
const DishContent: React.FC<{ dish: DishType; close: () => void }> = (
  props
) => {
  const dish = props.dish;
  return (
    <div>
      <Navbar>
        <Close onClick={props.close}>&times;</Close>
      </Navbar>
      <Picture src={dish.picture} alt={dish.name} />
      <Footer />
    </div>
  );
};

export default DishContent;

import React from "react";
import styled from "styled-components";
import DishType from "../types/dishType";
import Changes from "./Changes";
import ChooseSide from "./ChooseSide";
import Footer from "./Footer";
import Quantity from "./Quantity";
const Close = styled.a`
  color: grey;
  font-size: 30px;
`;

const Navbar = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  box-shadow: 0px 2px 3px 0 rgba(0, 0, 0, 0.05);
`;
const Picture = styled.img`
  width: 100%;
  height: 30vh;
`;
const Button = styled.button`
  width: 50%;
  height: 7vh;
  border: 0;
  background-color: black;
  color: white;
  font-size: 15px;
  font-family: HelveticaNeue-thin;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
`;
const Info = styled.div`
  background-color: white;
  display: flex;
  height: 20vh;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
const Headline = styled.header`
  font-size: 30px;
  font-family: HelveticaNeue;
  @media only screen and (min-width: 650px) {
  }
`;
const Label = styled.label`
  font-size: 18px;
  font-family: HelveticaNeue-thin;
  text-align: center;
  margin: 0px 20%;
  @media only screen and (min-width: 650px) {
  }
`;
const Price = styled.label`
  font-size: 20px;
  font-family: HelveticaNeue;
  text-align: center;
  display: flex;
  align-items: center;
  @media only screen and (min-width: 650px) {
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
      <Info>
        <Container>
          <Headline>{dish.name}</Headline>
          <Label>{dish.ingredients[0]}</Label>
          <Price>{dish.price}</Price>
        </Container>
      </Info>

      <ChooseSide sides={dish.sideOptions} />
      <Changes changes={dish.changes} />
      <Quantity />
      <Wrapper>
        <Button>Add To Bag</Button>
      </Wrapper>
      <FooterDiv>
        <Footer />
      </FooterDiv>
    </div>
  );
};

export default DishContent;

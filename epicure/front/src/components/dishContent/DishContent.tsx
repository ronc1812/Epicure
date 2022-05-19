import React from "react";
import DishType from "../../types/dishType";
import Changes from "../changes/Changes";
import ChooseSide from "../chooseSide/ChooseSide";
import Footer from "../footer/Footer";
import Quantity from "../quantity/Quantity";
import {
  Close,
  Headline,
  Picture,
  Price,
  Label,
  Container,
  Info,
  Wrapper,
  FooterDiv,
  Button,
  Div,
  Navbar,
} from "./style";
const DishContent: React.FC<{ dish: DishType; close: () => void }> = (
  props
) => {
  const { dish } = props;
  const { close } = props;
  return (
    <Div>
      <Navbar>
        <Close onClick={close}>&times;</Close>
      </Navbar>
      <Picture src={dish.picture} alt={dish.name} />
      <Info>
        <Container>
          <Headline>{dish.name}</Headline>
          <Label>{dish.ingredients[0]}</Label>
          <Price>{dish.price}</Price>
        </Container>
      </Info>
      <div>
        <ChooseSide sides={dish.sideOptions} />
        <Changes changes={dish.changes} />
        <Quantity />
      </div>
      <Wrapper>
        <Button>Add To Bag</Button>
      </Wrapper>
      <FooterDiv>
        <Footer />
      </FooterDiv>
    </Div>
  );
};

export default DishContent;

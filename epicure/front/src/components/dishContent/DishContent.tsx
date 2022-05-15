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
      <Picture src={dish.dish_image.toString()} alt={dish.dish_name} />
      <Info>
        <Container>
          <Headline>{dish.dish_name}</Headline>
          <Label>{dish.dish_ingredients.ingredients.join()}</Label>
          <Price>{dish.dish_price}</Price>
        </Container>
      </Info>
      <div>
        {console.log(dish.dish_options)}
        <ChooseSide sides={dish.dish_options.option} />
        <Changes changes={dish.dish_changes.changes} />
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

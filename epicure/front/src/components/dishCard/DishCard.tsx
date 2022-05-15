import DishType from "../../types/dishType";
import {
  Picture,
  Price,
  Label,
  Headline,
  Container,
  Info,
  Wrapper,
} from "./style";
const DishCard: React.FC<{ data: DishType }> = (props) => {
  const dish = props.data;
  return (
    <Wrapper>
      <Picture src={dish.dish_image.toString()} alt={dish.dish_name} />
      <Info>
        <Container>
          <Headline>{dish.dish_name}</Headline>
          <Label>{dish.dish_ingredients.ingredients}</Label>
        </Container>
        <Price>{dish.dish_price}</Price>
      </Info>
    </Wrapper>
  );
};
export default DishCard;

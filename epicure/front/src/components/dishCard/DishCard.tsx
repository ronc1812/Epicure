import DishType from "../../types/dishType";
import {
  Picture,
  Price,
  Label,
  Headline,
  Container,
  Info,
  Wrapper,
  Line,
  DishFooter,
} from "./style";
import shekel from "../images/ils.png";
const DishCard: React.FC<{ data: DishType }> = (props) => {
  const dish = props.data;
  return (
    <Wrapper>
      <Picture src={dish.dish_image.toString()} alt={dish.dish_name} />
      <Info>
        <Container>
          <Headline>{dish.dish_name}</Headline>
          <Label>
            {dish.dish_ingredients.ingredients.map((ingredient) => {
              return <label>{ingredient}, </label>;
            })}
          </Label>
        </Container>
        <DishFooter>
          <Line />
          <img src={shekel} alt="ils" />
          <Price>{dish.dish_price}</Price>
          <Line />
        </DishFooter>
      </Info>
    </Wrapper>
  );
};
export default DishCard;

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
      <Picture src={dish.picture} alt={dish.name} />
      <Info>
        <Container>
          <Headline>{dish.name}</Headline>
          <Label>{dish.ingredients[0]}</Label>
        </Container>
        <Price>{dish.price}</Price>
      </Info>
    </Wrapper>
  );
};
export default DishCard;

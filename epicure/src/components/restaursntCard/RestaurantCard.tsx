import RestaurantType from "../../types/restaurantType";
import { Label, Headline, Picture, Info, Wrapper } from "./style";
const RestaurantCard: React.FC<{
  data: RestaurantType;
  onClick: () => void;
}> = (props) => {
  const restaurant = props.data;
  return (
    <Wrapper onClick={props.onClick}>
      <Picture src={restaurant.picture} alt={restaurant.name} />
      <Info>
        <Headline>{restaurant.name}</Headline>
        <Label>{restaurant.chef}</Label>
      </Info>
    </Wrapper>
  );
};
export default RestaurantCard;

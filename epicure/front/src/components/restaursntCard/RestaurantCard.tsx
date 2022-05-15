import RestaurantType from "../../types/restaurantType";
import { Label, Headline, Picture, Info, Wrapper } from "./style";
const RestaurantCard: React.FC<{
  data: RestaurantType;
  onClick: () => void;
}> = (props) => {
  const restaurant = props.data;

  return (
    <Wrapper onClick={props.onClick}>
      <Picture
        src={restaurant.restaurant_image}
        alt={restaurant.restaurant_name}
      />
      <Info>
        <Headline>{restaurant.restaurant_name}</Headline>
        <Label>{restaurant.restaurant_chef}</Label>
      </Info>
    </Wrapper>
  );
};
export default RestaurantCard;

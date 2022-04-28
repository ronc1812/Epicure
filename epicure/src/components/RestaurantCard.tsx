import styled from "styled-components";
import RestaurantType from "../types/restaurantType";
const Wrapper = styled.div`
  width: 47vw;
  height: 35vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: 650px) {
    width: 30vw;
    height: 45vh;
  }
`;

const Info = styled.div`
  width: 100%;
  height: 15vh;
  background-color: #f7e0b2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: 650px) {
    height: 20vh;
  }
`;
const Picture = styled.img`
  width: 100%;
  height: 18vh;
  @media only screen and (min-width: 650px) {
    height: 25vh;
  }
`;

const Headline = styled.header`
  font-size: 25px;
  font-family: HelveticaNeue;
`;
const Label = styled.label`
  font-size: 20px;
  font-family: HelveticaNeue-thin;
`;
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

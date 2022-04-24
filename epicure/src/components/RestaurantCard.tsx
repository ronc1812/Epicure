import styled from "styled-components";
import RestaurantType from "../types/restaurantType";
const Wrapper = styled.div`
  width: 45vw;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Info = styled.div`
  width: 100%;
  height: 15vh;
  background-color: #f7e0b2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Picture = styled.img`
  width: 100%;
  height: 25vh;
`;

const Headline = styled.header`
  font-size: 25px;
  font-family: HelveticaNeue;
  @media only screen and (min-width: 650px) {
  }
`;
const Label = styled.label`
  font-size: 20px;
  font-family: HelveticaNeue-thin;
  @media only screen and (min-width: 650px) {
  }
`;
const RestaurantCard: React.FC<{
  data: RestaurantType;
  onClick: () => void;
}> = (props) => {
  const restaurant = props.data;
  return (
    <Wrapper>
      <Picture src={restaurant.picture} alt={restaurant.name} />
      <Info>
        <Headline>{restaurant.name}</Headline>
        <Label>{restaurant.chef}</Label>
      </Info>
    </Wrapper>
  );
};
export default RestaurantCard;

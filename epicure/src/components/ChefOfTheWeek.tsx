import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import getChefOfTheWeek from "../services/getChefOfTheWeek";
import getPopularRes from "../services/getPopularRes";
import RestaurantType from "../types/restaurantType";

const Headline = styled.header`
  font-size: 13px;
  font-family: HelveticaNeue-thin;
  text-align: center;
  @media only screen and (min-width: 650px) {
    font-size: 30px;
  }
`;
const Picture = styled.img`
  width: 90%;
  @media only screen and (min-width: 650px) {
    width: 35%;
  }
`;

const Info = styled.div`
  font-size: 13px;
  width: 90%;
  font-family: HelveticaNeue-thin;
  @media only screen and (min-width: 650px) {
    width: 35%;
    font-size: 18px;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  width: 80%;
  font-family: HelveticaNeue-thin;
`;
const ChefOfTheWeek = () => {
  const [chef, setChef] = useState<{
    name: string;
    picture: string;
    info: string;
  }>();
  const [popular, setPopular] = useState<RestaurantType[]>([]);
  const navigator = useNavigate();
  useEffect(() => {
    function getChef() {
      const fetchChef = getChefOfTheWeek();
      setChef(fetchChef);
      const restaurants = getPopularRes();
      setPopular(restaurants);
    }
    getChef();
  }, []);

  return (
    <Wrapper>
      <Headline>CHEF OF THE WEEK</Headline>
      <Picture src={chef?.picture} alt="chef" />

      <Info>{chef?.info}</Info>
    </Wrapper>
  );
};
export default ChefOfTheWeek;

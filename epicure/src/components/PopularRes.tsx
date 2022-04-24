import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import getPopularRes from "../services/getPopularRes";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import RestaurantType from "../types/restaurantType";
import RestaurantCard from "./RestaurantCard";
type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;
const Wrap = styled.div`
  margin-top: 15%;
  @media only screen and (min-width: 650px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
  }
`;
const Div = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  margin-top: 1%;
`;
const Headline = styled.header`
  font-size: 13px;
  font-family: HelveticaNeue-thin;
  margin-top: 20px;
  text-align: start;
  margin-left: 5%;
  @media only screen and (min-width: 650px) {
    font-size: 30px;
    text-align: center;
  }
`;

const All = styled.button`
  visibility: hidden;
  @media only screen and (min-width: 650px) {
    visibility: visible;
    border: 0;
    background-color: white;
    font-family: HelveticaNeue-thin;
    font-size: 25px;
    align-self: flex-end;
    margin-right: 14%;
  }
`;

const PopularRes = () => {
  const navigator = useNavigate();
  const [popular, setPopular] = useState<RestaurantType[]>([]);
  useEffect(() => {
    async function getPopular() {
      const restaurants = getPopularRes();
      setPopular(restaurants);
    }
    getPopular();
  }, []);
  const restaurantsHandler = () => {
    navigator("/restaurants");
  };
  function onWheel(
    apiObj: scrollVisibilityApiType,
    ev: React.WheelEvent
  ): void {
    const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

    if (isThouchpad) {
      ev.stopPropagation();
      return;
    }

    if (ev.deltaY < 0) {
      apiObj.scrollNext();
    } else if (ev.deltaY > 0) {
      apiObj.scrollPrev();
    }
  }
  return (
    <Wrap>
      <Headline>THE POPULAR RESTAURANTS IN EPICURE :</Headline>
      <ScrollMenu onWheel={onWheel}>
        <Div>
          {popular.map((restaurant) => {
            return (
              <RestaurantCard
                data={restaurant}
                key={popular.indexOf(restaurant)}
                onClick={() => navigator(`/restaurants/${restaurant.name}`)}
              />
            );
          })}
        </Div>
      </ScrollMenu>
      <br />
      <All onClick={restaurantsHandler}>All Restaurants {">>"}</All>
    </Wrap>
  );
};
export default PopularRes;

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import getPopularRes from "../services/getPopularRes";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

const Headline = styled.header`
  @media (max-width: 768px) {
    font-size: 13px;
    font-family: HelveticaNeue-thin;
    margin-top: 60px;
    margin-left: 10px;
  }
`;
const Res = styled.img`
  @media (max-width: 768px) {
    width: 250px;
    margin-left: 10px;
    margin-top: 5px;
  }
`;
const All = styled.button`
  @media (max-width: 768px) {
    visibility: hidden;
  }
`;
const PopularRes = () => {
  const navigator = useNavigate();
  const [popular, setPopular] = useState<string[]>([]);
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
    <>
      <Headline>THE POPULAR RESTAURANTS IN EPICURE :</Headline>
      <ScrollMenu onWheel={onWheel}>
        {popular.map((restaurant) => {
          return (
            <Res src={restaurant} alt="" key={popular.indexOf(restaurant)} />
          );
        })}
      </ScrollMenu>
      <br />
      <All onClick={restaurantsHandler}>All Restaurants {">>"}</All>
    </>
  );
};
export default PopularRes;

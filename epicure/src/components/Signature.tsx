import { useEffect, useState } from "react";
import getSignature from "../services/getSignature";
import Dish from "./Dish";
import DishType from "../types/dishType";
import styled from "styled-components";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;
const Headline = styled.header`
  font-size: 13px;
  font-family: HelveticaNeue-thin;
  @media (min-width: 769px) {
    font-size: 30px;
    font-family: HelveticaNeue-thin;
    margin-top: 4%;
    text-align: center;
    margin-right: 15%;
  }
`;
const Wrapper = styled.div`
  @media (min-width: 769px) {
    margin-left: 15%;
  }
`;

const SignatureDish = () => {
  const [dishes, setDishes] = useState<DishType[]>([]);
  useEffect(() => {
    function getDishes() {
      const fetchDishes = getSignature();
      setDishes(fetchDishes);
    }
    getDishes();
  }, []);

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
      <Wrapper>
        <Headline>SIGNATURE DISH OF :</Headline>
        <ScrollMenu onWheel={onWheel}>
          {dishes.map((dish) => {
            return <Dish dish={dish} key={dish.name} />;
          })}
        </ScrollMenu>
      </Wrapper>
    </>
  );
};
export default SignatureDish;

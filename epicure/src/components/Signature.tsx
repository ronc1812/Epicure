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
  margin-left: 5%;
  @media only screen and (min-width: 650px) {
    font-size: 30px;
    text-align: center;
  }
`;
const Wrapper = styled.div`
  @media only screen and (min-width: 650px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
  }
`;
const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  @media only screen and (min-width: 650px) {
    gap: 30px;
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
          <Wrap>
            {dishes.map((dish) => {
              return <Dish dish={dish} key={dish.name} />;
            })}
          </Wrap>
        </ScrollMenu>
      </Wrapper>
    </>
  );
};
export default SignatureDish;

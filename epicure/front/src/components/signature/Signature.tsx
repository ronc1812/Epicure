import { useEffect, useState } from "react";
import getSignature from "../../services/getSignature";
import Dish from "../dish/Dish";
import DishType from "../../types/dishType";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { Wrap, Wrapper, Headline } from "./style";
type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

const SignatureDish = () => {
  const [dishes, setDishes] = useState<DishType[]>([]);
  useEffect(() => {
    async function getDishes() {
      const fetchDishes: DishType[] = await getSignature();
      setDishes(fetchDishes);
    }
    getDishes();
  }, []);

  const onWheel = (apiObj: scrollVisibilityApiType, ev: React.WheelEvent) => {
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
  };
  return (
    <>
      <Wrapper>
        <Headline>SIGNATURE DISH OF :</Headline>

        <ScrollMenu onWheel={onWheel}>
          <Wrap>
            {dishes.map((dish) => {
              return <Dish dish={dish} key={dish.dish_name} />;
            })}
          </Wrap>
        </ScrollMenu>
      </Wrapper>
    </>
  );
};
export default SignatureDish;

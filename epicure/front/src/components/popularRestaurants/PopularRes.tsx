import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import getPopularRes from "../../services/getPopularRes";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import RestaurantType from "../../types/restaurantType";
import RestaurantCard from "../restaursntCard/RestaurantCard";
import { All, Headline, Div, Wrap } from "./style";
type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

const PopularRes = () => {
  const navigator = useNavigate();
  const [popular, setPopular] = useState<RestaurantType[]>([]);
  useEffect(() => {
    function getPopular() {
      const restaurants = getPopularRes();
      setPopular(restaurants);
    }
    getPopular();
  }, []);
  const restaurantsHandler = () => {
    navigator("/restaurants");
  };
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

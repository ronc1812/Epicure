import { useEffect, useState } from "react";
import getChefOfTheWeek from "../../services/getChefOfTheWeek";
import getSignature from "../../services/getSignature";
import DishType from "../../types/dishType";
import Dish from "../dish/Dish";
import { Headline, Picture, Info, Wrapper, Dishes } from "./style";
const ChefOfTheWeek = () => {
  const [chef, setChef] = useState<{
    name: string;
    picture: string;
    info: string;
  }>();
  const [res, setRes] = useState<DishType[]>();
  useEffect(() => {
    async function getChef() {
      const fetchChef = getChefOfTheWeek();
      setChef(fetchChef);
      const chefDishes = await getSignature();
      setRes(chefDishes);
    }
    getChef();
  }, []);

  return (
    <Wrapper>
      <Headline>CHEF OF THE WEEK</Headline>
      <Picture src={chef?.picture} alt="chef" />

      <Info>{chef?.info}</Info>
      {/* <label>Yossi`s Restaurants : </label>
      <Dishes>
        {res?.map((dish) => {
          return <Dish dish={dish} key={dish.dish_name} />;
        })}
      </Dishes> */}
    </Wrapper>
  );
};
export default ChefOfTheWeek;

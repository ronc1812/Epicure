import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getDishes from "../services/getDishes";
import getRestaurant from "../services/getRestaurant";
import DishType from "../types/dishType";
import Dish from "./Dish";

import Footer from "./Footer";
import Header from "./Header";

const Restaurant = () => {
  const { restaurant } = useParams<string>();
  const [breakfastMenu, setBreakfastMenu] = useState<DishType[]>();
  const [lunchMenu, setLunchMenu] = useState<DishType[]>();
  const [dinnerMenu, setDinnerMenu] = useState<DishType[]>();
  const [current, setCurrent] = useState<DishType[]>();
  let breakfast: DishType[] = [];
  let lunch: DishType[] = [];
  let dinner: DishType[] = [];
  useEffect(() => {
    function getInfo() {
      const currentRes = getRestaurant(restaurant);
      currentRes[0]?.menu.breakfast.map((id) => {
        breakfast.push(getDishes(id));
      });
      currentRes[0]?.menu.lunch.map((id) => {
        return lunch.push(getDishes(id));
      });
      currentRes[0]?.menu.dinner.map((id) => {
        return dinner.push(getDishes(id));
      });
      setBreakfastMenu(breakfast);
      setLunchMenu(lunch);
      setDinnerMenu(dinner);
      setCurrent(breakfast);
    }
    getInfo();
  }, []);

  return (
    <>
      <Header />
      <header>{restaurant}</header>
      <button onClick={() => setCurrent(breakfastMenu)}>Breakfast</button>
      <button onClick={() => setCurrent(lunchMenu)}>Lunch</button>
      <button onClick={() => setCurrent(dinnerMenu)}>Dinner</button>
      <br />
      {current?.map((dish) => {
        return <Dish dish={dish} key={dish.id} />;
      })}
      <Footer />
    </>
  );
};
export default Restaurant;

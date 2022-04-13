import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getDishes from "../services/getDishes";
import getRestaurant from "../services/getRestaurant";
import Dish from "../types/dishType";
import RestaurantType from "../types/restaurantType";
import Footer from "./Footer";
import Header from "./Header";

const Restaurant = () => {
  const { restaurant } = useParams<string>();
  const [breakfastMenu, setBreakfastMenu] = useState<Dish[]>();
  const [lunchMenu, setLunchMenu] = useState<Dish[]>();
  const [dinnerMenu, setDinnerMenu] = useState<Dish[]>();
  const [current, setCurrent] = useState<Dish[]>();
  let breakfast: Dish[] = [];
  let lunch: Dish[] = [];
  let dinner: Dish[] = [];
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
        return <img src={dish.picture} alt={dish.name} key={dish.id} />;
      })}
      <Footer />
    </>
  );
};
export default Restaurant;

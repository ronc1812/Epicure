import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getDishes from "../../services/getDishes";
import getRestaurant from "../../services/getRestaurant";
import DishType from "../../types/dishType";
import Dish from "../dish/Dish";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import RestaurantType from "../../types/restaurantType";
import clock from "../images/clock-icon.png";
import {
  Open,
  Chef,
  Wrap,
  Wrapper,
  Picture,
  Dishes,
  Div,
  StyledButton,
  Navbar,
  Name,
} from "./style";
const Restaurant = () => {
  const { restaurant } = useParams<string>();
  const [breakfastMenu, setBreakfastMenu] = useState<DishType[]>();
  const [lunchMenu, setLunchMenu] = useState<DishType[]>();
  const [dinnerMenu, setDinnerMenu] = useState<DishType[]>();
  const [current, setCurrent] = useState<DishType[]>();
  const [picture, setPicture] = useState<string>("");
  const [res, setRes] = useState<RestaurantType>();
  let breakfast: DishType[] = [];
  let lunch: DishType[] = [];
  let dinner: DishType[] = [];
  useEffect(() => {
    function getInfo() {
      const currentRes = getRestaurant(restaurant);
      setRes(currentRes[0]);
      currentRes[0]?.menu.breakfast.map((id) => {
        return breakfast.push(getDishes(id));
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
      setPicture(currentRes[0].picture);
    }
    getInfo();
  }, []);

  return (
    <>
      <Header />
      <Wrap>
        <Wrapper>
          <Picture src={picture} alt="" />
          <Name>{res?.name}</Name>
          <Chef>{res?.chef}</Chef>
          <Open>
            <img src={clock} alt="" /> Open Now
          </Open>
        </Wrapper>
        <Navbar>
          <StyledButton onClick={() => setCurrent(breakfastMenu)}>
            Breakfast
          </StyledButton>
          <StyledButton onClick={() => setCurrent(lunchMenu)}>
            Lunch
          </StyledButton>
          <StyledButton onClick={() => setCurrent(dinnerMenu)}>
            Dinner
          </StyledButton>
        </Navbar>
        <br />
        <Dishes>
          {current?.map((dish) => {
            return (
              <Div key={dish.id}>
                <Dish dish={dish} key={dish.id} />
              </Div>
            );
          })}
        </Dishes>
      </Wrap>
      <Footer />
    </>
  );
};
export default Restaurant;

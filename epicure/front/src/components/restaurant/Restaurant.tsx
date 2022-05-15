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
  const [breakfastMenu, setBreakfastMenu] = useState<DishType[]>([]);
  const [lunchMenu, setLunchMenu] = useState<DishType[]>([]);
  const [dinnerMenu, setDinnerMenu] = useState<DishType[]>([]);
  const [current, setCurrent] = useState<DishType[]>();
  const [picture, setPicture] = useState<string>("");
  const [res, setRes] = useState<RestaurantType>();

  useEffect(() => {
    async function getInfo() {
      const currentRes: RestaurantType = await getRestaurant(restaurant);
      setRes(currentRes);
      const dishes: DishType[] = await getDishes(
        currentRes.restaurant_menu.menu
      );

      dishes.forEach((dish) => {
        if (dish.dish_type.breakfast) {
          setBreakfastMenu((prevState) => {
            return [...prevState, dish];
          });
        }
        if (dish.dish_type.lunch) {
          setLunchMenu((prevState) => {
            return [...prevState, dish];
          });
        }
        if (dish.dish_type.dinner) {
          setDinnerMenu((prevState) => {
            return [...prevState, dish];
          });
        }
      });
      setPicture(currentRes.restaurant_image);
      setCurrent(dishes);
    }
    getInfo();
  }, []);

  return (
    <>
      <Header />
      <Wrap>
        <Wrapper>
          <Picture src={picture} alt="" />
          <Name>{res?.restaurant_name}</Name>
          <Chef>{res?.restaurant_chef}</Chef>
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
        {current && (
          <Dishes>
            {current.map((dish) => {
              return (
                <Div key={dish.dish_id}>
                  <Dish dish={dish} key={dish.dish_id} />
                </Div>
              );
            })}
          </Dishes>
        )}
      </Wrap>
      <Footer />
    </>
  );
};
export default Restaurant;

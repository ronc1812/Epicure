import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getDishes from "../services/getDishes";
import getRestaurant from "../services/getRestaurant";
import DishType from "../types/dishType";
import Dish from "./Dish";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

const Navbar = styled.div`
  display: grid;
  grid-template-areas: "a b c ";
  width: 100%;
  height: 8vh;
  box-shadow: 0px 2px 3px 0 rgba(0, 0, 0, 0.05);
  @media only screen and (min-width: 650px) {
    width: 40%;
    box-shadow: 0px 0px 0px 0px;
  }
`;
const StyledButton = styled.button`
  border: 0;
  background-color: white;
  font-size: 13px;
  font-family: HelveticaNeue-thin;
  :hover {
    border-bottom: 1px solid orange;
  }
`;
const Wrap = styled.div`
  @media only screen and (min-width: 650px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;
const Picture = styled.img`
  width: 100%;
  @media only screen and (min-width: 650px) {
    width: 60%;
  }
`;
const Restaurant = () => {
  const { restaurant } = useParams<string>();
  const [breakfastMenu, setBreakfastMenu] = useState<DishType[]>();
  const [lunchMenu, setLunchMenu] = useState<DishType[]>();
  const [dinnerMenu, setDinnerMenu] = useState<DishType[]>();
  const [current, setCurrent] = useState<DishType[]>();
  const [picture, setPicture] = useState<string>("");
  let breakfast: DishType[] = [];
  let lunch: DishType[] = [];
  let dinner: DishType[] = [];
  useEffect(() => {
    function getInfo() {
      const currentRes = getRestaurant(restaurant);
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
        <Picture src={picture} alt="" />
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
        {current?.map((dish) => {
          return <Dish dish={dish} key={dish.id} />;
        })}
      </Wrap>
      <Footer />
    </>
  );
};
export default Restaurant;

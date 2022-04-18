import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getDishes from "../services/getDishes";
import getRestaurant from "../services/getRestaurant";
import DishType from "../types/dishType";
import Dish from "./Dish";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

const FooterDiv = styled.div`
  @media (max-width: 768px) {
    position: fixed;
    bottom: 10px;
    width: 390px;
    margin-left: -8px;
  }
`;
const Navbar = styled.div`
  @media (max-width: 768px) {
    display: grid;
    grid-template-areas: "a b c ";
    width: 390px;
    margin-left: -8px;
    height: 50px;
    box-shadow: 0px 2px 3px 0 rgba(0, 0, 0, 0.05);
  }
`;
const StyledButton = styled.button`
  @media (max-width: 768px) {
    border: 0;
    background-color: white;
    font-size: 13px;
    font-family: HelveticaNeue-thin;
    :hover {
      border-bottom: 1px solid orange;
    }
  }
`;

const Picture = styled.img`
  @media (max-width: 768px) {
    margin-left: -8px;
    width: 390px;
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
      <Picture src={picture} alt="" />
      <Navbar>
        <StyledButton onClick={() => setCurrent(breakfastMenu)}>
          Breakfast
        </StyledButton>
        <StyledButton onClick={() => setCurrent(lunchMenu)}>Lunch</StyledButton>
        <StyledButton onClick={() => setCurrent(dinnerMenu)}>
          Dinner
        </StyledButton>
      </Navbar>
      <br />
      {current?.map((dish) => {
        return <Dish dish={dish} key={dish.id} />;
      })}

      <Footer />
    </>
  );
};
export default Restaurant;

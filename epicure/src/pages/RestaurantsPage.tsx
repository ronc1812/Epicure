import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import RestaurantCard from "../components/RestaurantCard";
import getRestaurants from "../services/getRestaurants";
import restaurantType from "../types/restaurantType";
const Headline = styled.header`
  font-size: 20px;
  font-family: HelveticaNeue-thin;
  margin-top: 4px;
  @media only screen and (min-width: 650px) {
    visibility: hidden;
  }
`;
const Picture = styled.div`
  padding: 0 1.8px;
  @media only screen and (min-width: 650px) {
    width: 30%;
  }
`;

const Navbar = styled.div`
  display: grid;
  grid-template-areas: "a b c d";
  width: 100%;
  height: 8vh;
  box-shadow: 0px 2px 3px 0 rgba(0, 0, 0, 0.05);
  @media only screen and (min-width: 650px) {
    width: 40%;
    box-shadow: 0px 0px 0px 0px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FooterDiv = styled.div`
  bottom: 10px;
  width: 100%;
`;
const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: -10px;
  @media only screen and (min-width: 650px) {
    gap: 40px;
    justify-content: center;
    margin-top: 1px;
  }
`;
const StyledButton = styled.button`
  border: 0;
  background-color: white;
  font-size: 13px;
  font-family: HelveticaNeue-thin;
  :hover {
    font-family: HelveticaNeue;
  }
  @media only screen and (min-width: 650px) {
    font-size: 20px;
  }
`;
const RestaurantsPage = () => {
  const navigator = useNavigate();
  const [restaurants, setRestaurants] = useState<restaurantType[] | null>(null);
  const [all, setAll] = useState<restaurantType[] | null>(null);
  useEffect(() => {
    function getAllRes() {
      const fetchRes = getRestaurants();
      setRestaurants(fetchRes);
      setAll(fetchRes);
    }
    getAllRes();
  }, []);
  const popularHandler = () => {
    const popular = all?.filter((restaurant) => {
      return restaurant.rating > 8;
    });
    popular ? setRestaurants(popular) : setRestaurants(null);
  };

  const openHandler = () => {
    const time = new Date(Date.now());

    const open = restaurants?.filter((restaurant) => {
      return (
        restaurant.closingTime > time.getHours() &&
        restaurant.openTime <= time.getHours()
      );
    });
    open ? setRestaurants(open) : setRestaurants(null);
  };
  return (
    <>
      <Header />
      <Wrapper>
        <Headline>RESTAURANTS</Headline>
        <Navbar>
          <StyledButton onClick={() => setRestaurants(all)}>All</StyledButton>
          <StyledButton onClick={popularHandler}>New</StyledButton>
          <StyledButton onClick={popularHandler}>Most Popular</StyledButton>
          <StyledButton onClick={openHandler}>Open Now</StyledButton>
        </Navbar>
        <Div>
          {restaurants?.map((restaurant) => {
            return (
              <Picture key={restaurant.name}>
                <RestaurantCard
                  key={restaurant.name}
                  data={restaurant}
                  onClick={() => navigator(`/restaurants/${restaurant.name}`)}
                />
              </Picture>
            );
          })}
        </Div>
      </Wrapper>
      <FooterDiv>
        <Footer />
      </FooterDiv>
    </>
  );
};
export default RestaurantsPage;

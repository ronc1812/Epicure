import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import RestaurantCard from "../../components/restaursntCard/RestaurantCard";
import getRestaurants from "../../services/getRestaurants";
import restaurantType from "../../types/restaurantType";
import {
  StyledButton,
  Div,
  FooterDiv,
  Wrapper,
  Navbar,
  Picture,
  Headline,
} from "./style";
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

import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import getRestaurants from "../services/getRestaurants";
import restaurantType from "../types/restaurantType";
const RestaurantsPage = () => {
  const [restaurants, setRestaurants] = useState<restaurantType[] | null>(null);
  const [all, setAll] = useState<restaurantType[] | null>(null);
  useEffect(() => {
    async function getAllRes() {
      const fetchRes = getRestaurants();
      setRestaurants(fetchRes);
      setAll(fetchRes);
    }
    getAllRes();
  }, []);
  const popularHandler = () => {
    const popular = restaurants?.filter((restaurant) => {
      return restaurant.rating > 8;
    });
    popular ? setRestaurants(popular) : setRestaurants(null);
  };
  return (
    <>
      <Header />
      <div>
        <button onClick={() => setRestaurants(all)}>All</button>
        <button>New</button>
        <button onClick={popularHandler}>Most Popular</button>
        <button>Open Now</button>
      </div>
      {restaurants?.map((restaurant) => {
        return <img src={restaurant.picture} alt={restaurant.name} />;
      })}
      <Footer />
    </>
  );
};
export default RestaurantsPage;

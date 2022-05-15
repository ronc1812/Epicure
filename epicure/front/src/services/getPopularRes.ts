import axios from "axios";
import RestaurantType from "../types/restaurantType";
const getPopularRes = async () => {
  const restaurants = await axios.get(
    "http://localhost:8080/restaurants/getPopular"
  );

  return restaurants.data;
};
export default getPopularRes;

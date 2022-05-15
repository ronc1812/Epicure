import axios from "axios";

const getRestaurants = async () => {
  const restaurants = await axios.get("http://localhost:8080/restaurants");
  return restaurants.data;
};
export default getRestaurants;

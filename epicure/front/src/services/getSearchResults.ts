import axios from "axios";
import RestaurantType from "../types/restaurantType";
import ChefType from "../types/chefType";
const getSearchResults = async (input: string) => {
  const { data } = await axios.get("http://localhost:8080/restaurants/");
  const restaurants: RestaurantType[] = data;
  const response = await axios.get("http://localhost:8080/chefs/");
  const chefs: ChefType[] = response.data;
  const filterRes = restaurants
    .filter((res) => {
      return res.restaurant_name.toLowerCase().startsWith(input);
    })
    .map((res) => {
      return res.restaurant_name;
    });

  const FilterChef = chefs
    .filter((chef) => {
      return chef.chef_name.toLowerCase().startsWith(input);
    })
    .map((chef) => {
      return chef.chef_name;
    });
  return [filterRes, FilterChef];
};

export default getSearchResults;

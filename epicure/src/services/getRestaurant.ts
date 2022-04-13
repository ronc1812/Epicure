import restaurants from "../Collections/restaurantsData";
const getRestaurant = (name: string | undefined) => {
  const restaurant = restaurants.filter((restaurant) => {
    return restaurant.name === name;
  });
  return restaurant;
};
export default getRestaurant;

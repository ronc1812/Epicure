import axios from "axios";

const getRestaurant = async (name: string | undefined) => {
  const restaurant = await axios.get(
    `http://localhost:8080/restaurants/getByName/${name}`
  );

  return restaurant.data;
};
export default getRestaurant;

import axios from "axios";
import DishType from "../types/dishType";

const getDishes = async (restaurantMenu: string[]) => {
  const dishes: DishType[] = await Promise.all(
    restaurantMenu.map(async (name) => {
      const { data } = await axios.get(
        `http://localhost:8080/dishes/getByName/${name}`
      );
      return data;
    })
  );
  return dishes;
};

export default getDishes;

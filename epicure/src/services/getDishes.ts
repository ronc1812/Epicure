import dishes from "../Collections/dishData";
const getDishes = (id: number) => {
  const wantedDishes = dishes.filter((dish) => {
    return dish.id === id;
  });
  return wantedDishes[0];
};
export default getDishes;

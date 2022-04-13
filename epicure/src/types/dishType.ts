type Dish = {
  name: string;
  id: number;
  ingredients: never[];
  picture: string;
  price: number;
  sideOptions: string[];
  changes: string[];
};
export default Dish;

type RestaurantType = {
  name: string;
  id: number;
  chef: string;
  menu: {
    breakfast: number[];
    lunch: number[];
    dinner: number[];
  };
  rating: number;
  picture: string;
  openTime: number;
  closingTime: number;
};
export default RestaurantType;

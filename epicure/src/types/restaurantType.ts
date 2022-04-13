type restaurantType = {
  name: string;
  id: number;
  chef: string;
  menu: {
    breakfast: never[];
    lunch: never[];
    dinner: never[];
  };
  rating: number;
  picture: string;
  openTime: number;
  closingTime: number;
};
export default restaurantType;

type RestaurantType = {
  restaurant_name: string;
  restaurant_id: number;
  restaurant_chef: string;
  restaurant_rating: number;
  restaurant_menu: { menu: string[] };
  restaurant_image: string;
  restaurant_open_time: Date;
  restaurant_close_time: Date;
  popular: number | null;
};
export default RestaurantType;

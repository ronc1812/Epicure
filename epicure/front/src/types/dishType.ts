type DishType = {
  dish_id: number;
  dish_name: string;

  dish_ingredients: { ingredients: string[] };

  dish_image: string;

  dish_price: number;

  dish_options: { option: string[] };

  dish_changes: { changes: string[] };

  dish_type: { lunch: boolean; dinner: boolean; breakfast: boolean };

  signature: number;
};
export default DishType;

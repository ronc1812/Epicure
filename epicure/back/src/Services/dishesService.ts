import { Dishes } from "./sqlService";

const getAll = async () => {
  const res = await Dishes.findAll();
  return res;
};

const getByName = async (dishName: string) => {
  const res = await Dishes.findOne({ where: { dish_name: dishName } });
  return res;
};

const getSignature = async () => {
  const res = await Dishes.findAll({ where: { signature: 1 } });
  return res;
};

export { getAll, getByName, getSignature };

import { Restaurant } from "./sqlService";

const getAll = async () => {
  const res = await Restaurant.findAll();
  return res;
};

const getByName = async (resName: string) => {
  const res = await Restaurant.findOne({
    where: {
      restaurant_name: resName,
    },
  });
  return res;
};

const getPopular = async () => {
  const res = await Restaurant.findAll({ where: { popular: 1 } });
  return res;
};

const getByChef = async (chefName: string) => {
  const res = await Restaurant.findOne({
    where: { restaurant_chef: chefName },
  });
};

export { getAll, getByChef, getByName, getPopular };

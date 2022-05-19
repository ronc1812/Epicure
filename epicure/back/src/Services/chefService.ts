import { chefs } from "./sqlService";
const getAll = async () => {
  const res = await chefs.findAll();
  return res;
};

const getByName = async (chefName: string) => {
  const res = await chefs.findOne({ where: { chef_name: chefName } });
  return res;
};

export { getAll, getByName };

import restaurants from "../Collections/restaurantsData";
const getPopularRes = () => {
  const popular = [restaurants[0], restaurants[1], restaurants[2]];
  return popular;
};
export default getPopularRes;

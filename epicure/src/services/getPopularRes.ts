import restaurants from "../Collections/restaurantsData";
const getPopularRes = () => {
  const popular = [
    restaurants[0].picture,
    restaurants[1].picture,
    restaurants[2].picture,
  ];
  return popular;
};
export default getPopularRes;

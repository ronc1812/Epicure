import restaurants from "../Collections/restaurantsData";
const getPopularRes = () => {
  const popular = {
    pic1: restaurants[0].picture,
    pic2: restaurants[1].picture,
    pic3: restaurants[2].picture,
  };
  return popular;
};
export default getPopularRes;

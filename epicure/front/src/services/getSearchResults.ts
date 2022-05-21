import chefs from "../Collections/chefsData";
import restaurants from "../Collections/restaurantsData";

const getSearchResults = (input: string) => {
  const filterRes = restaurants
    .filter((res) => {
      return res.name.toLowerCase().startsWith(input);
    })
    .map((res) => {
      return res.name;
    });

  const FilterChef = chefs
    .filter((chef) => {
      return chef.name.toLowerCase().startsWith(input);
    })
    .map((chef) => {
      return chef.name;
    });
  return [filterRes, FilterChef];
};

export default getSearchResults;

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import getPopularRes from "../services/getPopularRes";
const PopularRes = () => {
  const navigator = useNavigate();
  const [popular, setPopular] = useState<{
    pic1: string;
    pic2: string;
    pic3: string;
  }>();
  useEffect(() => {
    async function getPopular() {
      const restaurants = getPopularRes();
      setPopular(restaurants);
    }
    getPopular();
  });
  const restaurantsHandler = () => {
    navigator("/restaurants");
  };
  return (
    <>
      <header>THE POPULAR RESTAURANTS IN EPICURE :</header>
      <img src={popular?.pic1} alt="" />
      <img src={popular?.pic2} alt="" />
      <img src={popular?.pic3} alt="" />
      <button onClick={restaurantsHandler}>All Restaurants {">>"}</button>
    </>
  );
};
export default PopularRes;

import { useEffect, useState } from "react";
import getSignature from "../services/getSignature";

const SignatureDish = () => {
  const [dishes, setDishes] = useState<{
    pic1: string;
    pic2: string;
    pic3: string;
  }>();
  useEffect(() => {
    function getDishes() {
      const fetchDishes = getSignature();
      setDishes(fetchDishes);
    }
    getDishes();
  }, []);
  return (
    <>
      <header>SIGNATURE DISH OF :</header>
      <img src={dishes?.pic1} alt="dish1" />
      <img src={dishes?.pic2} alt="dish2" />
      <img src={dishes?.pic3} alt="dish3" />
    </>
  );
};
export default SignatureDish;

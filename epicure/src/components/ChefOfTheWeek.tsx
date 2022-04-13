import { useEffect, useState } from "react";
import getChefOfTheWeek from "../services/getChefOfTheWeek";

const ChefOfTheWeek = () => {
  const [chef, setChef] = useState<{
    name: string;
    picture: string;
    info: string;
  }>();
  useEffect(() => {
    function getChef() {
      const fetchChef = getChefOfTheWeek();
      setChef(fetchChef);
    }
    getChef();
  }, []);
  return (
    <>
      <header>CHEF OF THE WEEK:</header>
      <img src={chef?.picture} alt="chef" />
      <h3>{chef?.info}</h3>
    </>
  );
};
export default ChefOfTheWeek;

import { useEffect, useState } from "react";
import getChefOfTheWeek from "../../services/getChefOfTheWeek";
import { Headline, Picture, Info, Wrapper } from "./style";
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
    <Wrapper>
      <Headline>CHEF OF THE WEEK</Headline>
      <Picture src={chef?.picture} alt="chef" />

      <Info>{chef?.info}</Info>
    </Wrapper>
  );
};
export default ChefOfTheWeek;

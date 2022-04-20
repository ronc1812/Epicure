import { useEffect, useState } from "react";
import styled from "styled-components";
import getChefOfTheWeek from "../services/getChefOfTheWeek";

const Headline = styled.header`
  font-size: 13px;
  font-family: HelveticaNeue-thin;
  text-align: center;
`;
const Picture = styled.img`
  width: 90%;
`;

const Info = styled.div`
  font-size: 13px;
  width: 90%;
  font-family: HelveticaNeue-thin;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  width: 80%;
  font-family: HelveticaNeue-thin;
`;
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

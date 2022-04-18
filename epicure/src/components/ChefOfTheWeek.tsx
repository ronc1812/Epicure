import { useEffect, useState } from "react";
import styled from "styled-components";
import getChefOfTheWeek from "../services/getChefOfTheWeek";

const Headline = styled.header`
  @media (max-width: 768px) {
    font-size: 13px;
    font-family: HelveticaNeue-thin;
    margin-top: 25px;
    margin-left: 120px;
  }
`;
const Picture = styled.img`
  @media (max-width: 768px) {
    width: 300px;
    margin-left: 30px;
  }
`;

const Info = styled.div`
  @media (max-width: 768px) {
    font-size: 13px;
    width: 300px;
    font-family: HelveticaNeue-thin;
    text-align: center;
    margin-left: 30px;
    margin-top: 15px;
  }
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
    <>
      <Headline>CHEF OF THE WEEK</Headline>
      <Picture src={chef?.picture} alt="chef" />
      <br />
      <Info>{chef?.info}</Info>
    </>
  );
};
export default ChefOfTheWeek;

import styled from "styled-components";
import spicy from "../images/spicy-icon.png";
import vegan from "../images/vegan-icon.png";
import vegetarian from "../images/vegetarian.png";

const Headline = styled.header`
  @media (max-width: 768px) {
    font-size: 13px;
    font-family: HelveticaNeue-thin;
    margin-top: 30px;
    margin-left: 100px;
  }
`;

const Wrapper = styled.div`
  @media (max-width: 768px) {
    display: grid;
    grid-template-areas: "a b c";
    background-color: #cdc9c9;
    width: 390px;
    text-align: center;
    margin-left: -9px;
    margin-top: 10px;
  }
`;

const Picture = styled.img`
  @media (max-width: 768px) {
    margin-left: 30px;
  }
`;
const IconMeaning = () => {
  return (
    <>
      <Headline>THE MEANING OF OUR ICONS:</Headline>
      <Wrapper>
        <Picture src={spicy} alt="spicy" />
        <Picture src={vegan} alt="vegan" />
        <Picture src={vegetarian} alt="vegetarian" />
      </Wrapper>
    </>
  );
};
export default IconMeaning;

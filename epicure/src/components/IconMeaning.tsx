import styled from "styled-components";
import spicy from "../images/spicy-icon.png";
import vegan from "../images/vegan-icon.png";
import vegetarian from "../images/vegetarian.png";

const Headline = styled.header`
  font-size: 13px;
  font-family: HelveticaNeue-thin;
  text-align: center;
`;

const Wrapper = styled.div`
  background-color: #cdc9c9;
  width: 100%;
  height: 15vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
const Icons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  gap: 40px;
`;
const Label = styled.label`
  font-size: 14px;
  font-family: HelveticaNeue-thin;
`;

const IconMeaning = () => {
  return (
    <>
      <Wrapper>
        <Headline>THE MEANING OF OUR ICONS:</Headline>
        <Icons>
          <div>
            <img src={spicy} alt="spicy" />
            <br />
            <Label>SPICY</Label>
          </div>
          <div>
            <img src={vegan} alt="vegan" />
            <br />
            <Label>VEGAN</Label>
          </div>
          <div>
            <img src={vegetarian} alt="vegetarian" />
            <br />
            <Label>VEGETARIAN</Label>
          </div>
        </Icons>
      </Wrapper>
    </>
  );
};
export default IconMeaning;

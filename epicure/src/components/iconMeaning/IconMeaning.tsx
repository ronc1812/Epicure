import spicy from "../images/spicy-icon.png";
import vegan from "../images/vegan-icon.png";
import vegetarian from "../images/vegetarian.png";
import { Label, Wrapper, Icons, Headline } from "./style";

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

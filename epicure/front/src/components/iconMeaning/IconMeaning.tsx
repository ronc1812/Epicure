import spicy from "../images/spicy-icon.png";
import vegan from "../images/vegan-icon.png";
import vegetarian from "../images/vegetarian.png";
import {
  Label,
  Wrapper,
  Icons,
  Headline,
  Container,
  Picture,
  Veget,
} from "./style";

const IconMeaning = () => {
  return (
    <>
      <Wrapper>
        <Headline>THE MEANING OF OUR ICONS:</Headline>
        <Icons>
          <Container>
            <Picture src={spicy} alt="spicy" />
            <Label>SPICY</Label>
          </Container>
          <Container>
            <Picture src={vegan} alt="vegan" />
            <Label>VEGAN</Label>
          </Container>
          <Container>
            <Veget src={vegetarian} alt="vegetarian" />
            <Label>VEGETARIAN</Label>
          </Container>
        </Icons>
      </Wrapper>
    </>
  );
};
export default IconMeaning;

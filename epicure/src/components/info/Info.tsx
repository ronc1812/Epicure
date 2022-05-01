import logo from "../images/about-logo.png";
import { InfoDiv, InfoOnSite, Wrapper, Picture, Res, Headline } from "./style";
const Info = () => {
  return (
    <Wrapper>
      <InfoDiv>
        <Headline>ABOUT US :</Headline>
        <InfoOnSite>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus
          vel justo fermentum bibendum non eu ipsum. Cras porta malesuada eros,
          eget blandit turpis suscipit at. Vestibulum sed massa in magna sodales
          porta. Vivamus elit urna, dignissim a vestibulum. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum
          bibendum no eu ipsum. Cras porta malesuada eros.
        </InfoOnSite>
      </InfoDiv>
      <Picture>
        <Res src={logo} />
      </Picture>
    </Wrapper>
  );
};
export default Info;

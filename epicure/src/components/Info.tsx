import styled from "styled-components";
import logo from "../images/about-logo.png";
const Headline = styled.header`
  font-size: 13px;
  font-family: HelveticaNeue-thin;
  text-align: center;
  margin-top: 20px;
`;
const Res = styled.img`
  width: 25%;
  background-color: var(#cdc9c9);
`;
const InfoOnSite = styled.div`
  font-size: 13px;
  width: 90%;
  font-family: HelveticaNeue-thin;
  text-align: center;
`;
const Wrapper = styled.div`
  background-color: #cdc9c9;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Info = () => {
  return (
    <Wrapper>
      <Headline>ABOUT US :</Headline>
      <InfoOnSite>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel
        justo fermentum bibendum non eu ipsum. Cras porta malesuada eros, eget
        blandit turpis suscipit at. Vestibulum sed massa in magna sodales porta.
        Vivamus elit urna, dignissim a vestibulum. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. In a lacus vel justo fermentum bibendum no
        eu ipsum. Cras porta malesuada eros.
      </InfoOnSite>
      <Res src={logo} />
    </Wrapper>
  );
};
export default Info;

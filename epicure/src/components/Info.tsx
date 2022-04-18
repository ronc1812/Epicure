import styled from "styled-components";
import logo from "../images/about-logo.png";
const Headline = styled.header`
  @media (max-width: 768px) {
    font-size: 13px;
    font-family: HelveticaNeue-thin;
    text-align: center;
    margin-top: 20px;
  }
`;
const Res = styled.img`
  @media (max-width: 768px) {
    width: 100px;
    margin-left: 150px;
    margin-top: 30px;
    background-color: var(#cdc9c9);
  }
`;
const InfoOnSite = styled.div`
  @media (max-width: 768px) {
    font-size: 13px;
    width: 300px;
    font-family: HelveticaNeue-thin;
    text-align: center;
    margin-left: 50px;
    margin-top: 10px;
  }
`;
const Wrapper = styled.div`
  background-color: #cdc9c9;
  @media (max-width: 768px) {
    background-color: #cdc9c9;
    width: 390px;
    margin-left: -8px;
  }
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

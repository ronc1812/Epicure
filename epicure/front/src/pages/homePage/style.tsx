import styled from "styled-components";
import backForDesktop from "../../components/images/hero-picture.jpg";
import backForMobile from "../../components/images/background.jpg";
const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 40px;
`;
const BackImg = styled.div`
  width: 100%;
  height: 25vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${backForMobile});
  @media only screen and (min-width: 650px) {
    background-image: url(${backForDesktop});
    width: 100%;
    height: 600px;
  }
`;
const SearchSection = styled.div`
  background-color: rgba(255, 255, 255, 0.88);
  width: 85vw;
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  @media only screen and (min-width: 650px) {
    background-color: rgba(255, 255, 255, 0.88);
    width: 100%;
    height: 35vh;
  }
`;
const Headline = styled.div`
  font-size: 27px;
  text-align: center;
  font-family: HelveticaNeue-thin;
  @media only screen and (min-width: 650px) {
    font-size: 45px;
    text-align: justify;
    width: 50%;
  }
`;

const MobileButtons = styled.div`
  background-color: #fafafa;
  width: 100%;
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
const ChefButton = styled.button`
  font-size: 13px;
  border: 0;
  letter-spacing: 0.93px;
  height: 5vh;
  text-align: center;
  width: 18%;
  font-family: HelveticaNeue;
  background-color: rgba(232, 196, 122, 0.8);
`;
const ResButton = styled(ChefButton)`
  width: 30%;
`;

export {
  ResButton,
  MobileButtons,
  ChefButton,
  Headline,
  SearchSection,
  BackImg,
  MainDiv,
};

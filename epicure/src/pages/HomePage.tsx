import styled from "styled-components";
import ChefOfTheWeek from "../components/ChefOfTheWeek";
import Footer from "../components/Footer";
import Header from "../components/Header";
import IconMeaning from "../components/IconMeaning";
import Info from "../components/Info";
import PopularRes from "../components/PopularRes";
import SearchBar from "../components/SearchBar";
import SignatureDish from "../components/Signature";
import backForDesktop from "../images/hero-picture.jpg";
import backForMobile from "../images/background.jpg";
import { useNavigate } from "react-router-dom";
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
const HomePage = () => {
  const navigator = useNavigate();
  const navigatorRes = () => {
    navigator("/restaurants");
  };
  const navigatorChefs = () => {
    navigator("/chefs");
  };
  return (
    <>
      <Header />
      <BackImg>
        <header>
          <SearchSection>
            <Headline>
              Epicure works with the top chef restaurants in Tel Aviv
            </Headline>
            <SearchBar header={true} />
          </SearchSection>
        </header>
      </BackImg>
      {window.innerWidth <= 600 ? (
        <MobileButtons>
          <ChefButton onClick={navigatorChefs}>CHEFS</ChefButton>
          <ResButton onClick={navigatorRes}>RESTAURANTS</ResButton>
        </MobileButtons>
      ) : (
        <></>
      )}
      <PopularRes />
      <SignatureDish />
      <MainDiv>
        <IconMeaning />
        <ChefOfTheWeek />
        <Info />
      </MainDiv>
      <Footer />
    </>
  );
};
export default HomePage;

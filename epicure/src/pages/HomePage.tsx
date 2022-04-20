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
const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
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
  @media only screen and (min-width: 650px) {
    background-color: rgba(255, 255, 255, 0.88);
    width: 50vw;
    height: 25vh;
  }
`;
const Headline = styled.div`
  font-size: 27px;
  text-align: center;
  font-family: HelveticaNeue-thin;
  @media only screen and (min-width: 650px) {
    font-size: 35px;
    text-align: justify;
    width: 54.5%;
  }
`;
const HomePage = () => {
  return (
    <>
      <Header />
      <BackImg>
        <header>
          <SearchSection>
            <Headline>
              Epicure works with the top chef restaurants in Tel Aviv
            </Headline>
            <SearchBar />
          </SearchSection>
        </header>
      </BackImg>
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

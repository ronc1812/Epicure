import styled from "styled-components";
import ChefOfTheWeek from "../components/ChefOfTheWeek";
import Footer from "../components/Footer";
import Header from "../components/Header";
import IconMeaning from "../components/IconMeaning";
import Info from "../components/Info";
import PopularRes from "../components/PopularRes";
import SearchBar from "../components/SearchBar";
import SignatureDish from "../components/Signature";
import back from "../images/background.jpg";
const BackImg = styled.div`
  @media (max-width: 768px) {
    background-image: url(${back});
    padding: 80px 10px 65px;
    width: 370px;
    margin-left: -8px;
  }
`;
const SearchSection = styled.div`
  @media (max-width: 768px) {
    background-color: rgba(255, 255, 255, 0.88);
    width: 330px;
    height: 125px;
    margin-left: 15px;
    margin-top: px;
  }
`;
const Headline = styled.header`
  @media (max-width: 768px) {
    font-size: 27px;
    margin-left: 15px;
    font-family: HelveticaNeue-thin;
  }
`;
const HomePage = () => {
  return (
    <>
      <Header />
      <div>
        <BackImg>
          <SearchSection>
            <Headline>
              Epicure works with the top chef restaurants in Tel Aviv
            </Headline>
            <SearchBar />
          </SearchSection>
        </BackImg>
      </div>
      <div>
        <PopularRes />
      </div>
      <div>
        <SignatureDish />
      </div>
      <div>
        <IconMeaning />
      </div>
      <div>
        <ChefOfTheWeek />
      </div>
      <Info />
      <Footer />
    </>
  );
};
export default HomePage;

import ChefOfTheWeek from "../../components/chefOfTheWeek/ChefOfTheWeek";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import IconMeaning from "../../components/iconMeaning/IconMeaning";
import Info from "../../components/info/Info";
import PopularRes from "../../components/popularRestaurants/PopularRes";
import SearchBar from "../../components/searchBar/SearchBar";
import SignatureDish from "../../components/signature/Signature";

import { useNavigate } from "react-router-dom";
import {
  ResButton,
  MobileButtons,
  ChefButton,
  Headline,
  SearchSection,
  BackImg,
  MainDiv,
} from "./style";
const HomePage = () => {
  const isMobile = window.innerWidth <= 600;
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
      {isMobile && (
        <MobileButtons>
          <ChefButton onClick={navigatorChefs}>CHEFS</ChefButton>
          <ResButton onClick={navigatorRes}>RESTAURANTS</ResButton>
        </MobileButtons>
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

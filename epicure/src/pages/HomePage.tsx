import ChefOfTheWeek from "../components/ChefOfTheWeek";
import Footer from "../components/Footer";
import Header from "../components/Header";
import IconMeaning from "../components/IconMeaning";
import PopularRes from "../components/PopularRes";
import SearchBar from "../components/SearchBar";
import SignatureDish from "../components/Signature";

const HomePage = () => {
  return (
    <>
      <Header />
      <div>
        <span>
          <header>
            Epicure works with the top chef restaurants in Tel Aviv
          </header>
          <SearchBar />
        </span>
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
      <Footer />
    </>
  );
};
export default HomePage;

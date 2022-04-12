import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
const logo = require("../images/epicure-logo.jpg");
const userIcon = require("../images/user-icon.png");
const bagIcon = require("../images/bag-icon.png");
const Header = () => {
  const navigator = useNavigate();
  const navigatorHome = () => {
    navigator("/");
  };
  const navigatorRes = () => {
    navigator("/restaurants");
  };
  const navigatorChefs = () => {
    navigator("/chefs");
  };
  return (
    <>
      <div>
        <img src={logo} alt="logo" />
        <button onClick={navigatorHome}>EPICURE</button>
        <button onClick={navigatorRes}>Restaurants</button>
        <button onClick={navigatorChefs}>Chefs</button>
        <SearchBar />
        <img src={userIcon} alt="user-icon" />
        <img src={bagIcon} alt="cart" />
      </div>
    </>
  );
};
export default Header;

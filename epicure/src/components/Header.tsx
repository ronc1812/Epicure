import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import styled from "styled-components";
import Popup from "reactjs-popup";
import bar from "../images/hamburgerBar.png";

const logo = require("../images/epicure-logo.jpg");
const userIcon = require("../images/user-icon.png");
const bagIcon = require("../images/bag-icon.png");
const Navbar = styled.div`
  @media (max-width: 768px) {
    display: grid;
    grid-template-areas: "a b c d";
    width: 250px;
    height: 50px;
    box-shadow: 0px 2px 3px 0 rgba(0, 0, 0, 0.05);
  }
`;
const MobileBar = styled.div`
  visibility: hidden;
  @media (max-width: 768px) {
    grid-area: a;
    visibility: visible;
  }
`;
const DesktopBar = styled.div`
  visibility: visible;
  @media (max-width: 768px) {
    visibility: hidden;
  }
`;
const Logo = styled.img`
  @media (max-width: 768px) {
    grid-area: b;
    height: 35px;
    margin-top: 2px;
    margin-left: -70px;
  }
`;
const HamburgerBar = styled.button`
  @media (max-width: 768px) {
    grid-area: a;
    background-color: white;
    border: white;
    margin-top: 8px;
    margin-left: 40px;
  }
`;
const BarLogo = styled(Logo)`
  @media (max-width: 768px) {
    margin-right: 0;
    height: 20px;
  }
`;
const IconProfile = styled.img`
  @media (max-width: 768px) {
    grid-area: c;
    text-align: right;
    margin-top: 8px;
    height: 25px;
    margin-right: 30px;
  }
`;
const IconBasket = styled.img`
  @media (max-width: 768px) {
    grid-area: d;
    text-align: right;
    margin-top: 8px;
    height: 25px;
    margin-right: -30px;
  }
`;
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
      <Navbar>
        <Logo src={logo} alt="logo" />
        <MobileBar>
          <Popup
            modal
            trigger={
              <HamburgerBar>
                <BarLogo src={bar} alt="bar" />
              </HamburgerBar>
            }
          >
            <button onClick={navigatorHome}>EPICURE</button>
            <button onClick={navigatorRes}>Restaurants</button>
            <button onClick={navigatorChefs}>Chefs</button>
          </Popup>
        </MobileBar>
        <DesktopBar>
          <button onClick={navigatorHome}>Epicure</button>
          <button onClick={navigatorRes}>Restaurants</button>
          <button onClick={navigatorChefs}>Chefs</button>
        </DesktopBar>
        <SearchBar />

        <IconProfile src={userIcon} alt="user-icon" />
        <IconBasket src={bagIcon} alt="cart" />
      </Navbar>
    </>
  );
};
export default Header;

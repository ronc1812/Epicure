import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import styled from "styled-components";
import Popup from "reactjs-popup";
import bar from "../images/hamburgerBar.png";
import NavarButtons from "./NavbarButtons";
import searchIcon from "../images/search-icon.png";
const logo = require("../images/epicure-logo.jpg");
const userIcon = require("../images/user-icon.png");
const bagIcon = require("../images/bag-icon.png");
const Navbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 7vh;
  box-shadow: 0px 2px 3px 0 rgba(0, 0, 0, 0.05);
  background-color: white;
  gap: 20%;
  @media only screen and (min-width: 650px) {
    gap: 45%;
  }
`;
const MobileBar = styled.div`
  visibility: visible;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 140px;
`;
const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;
const DesktopBar = styled.div`
  visibility: hidden;
  @media only screen and (min-width: 650px) {
    visibility: visible;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
`;
const Logo = styled.img`
  height: 4vh;
  @media only screen and (min-width: 650px) {
    height: 5vh;
  }
`;
const HamburgerBar = styled.button`
  width: 4vw;
  background-color: white;
  border: white;
`;
const BarLogo = styled(Logo)`
  height: 2vh;
`;
const Icon = styled.img`
  height: 2vh;
  @media only screen and (min-width: 650px) {
    height: 5vh;
  }
`;

const Modal = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
`;

const Button = styled.button`
  @media only screen and (min-width: 650px) {
    font-size: 18px;
    font-family: HelveticaNeue-Thin;
    border: 0;
    color: grey;
    background-color: white;
  }
`;

const ButtonEpicure = styled.button`
  font-size: 27px;
  font-family: HelveticaNeue-thin;
  border: 0;
  background-color: white;
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
        {window.innerWidth <= 600 ? (
          <MobileBar>
            <Popup
              modal
              trigger={
                <HamburgerBar>
                  <BarLogo src={bar} alt="bar" />
                </HamburgerBar>
              }
            >
              {(close: () => void) => (
                <Modal>
                  <NavarButtons close={close} />
                </Modal>
              )}
            </Popup>
            <Logo src={logo} alt="logo" />
          </MobileBar>
        ) : (
          <div>
            <DesktopBar>
              <Logo src={logo} alt="logo" />
              <ButtonEpicure onClick={navigatorHome}>EPICURE</ButtonEpicure>
              <Button onClick={navigatorRes}>Restaurants</Button>
              <Button onClick={navigatorChefs}>Chefs</Button>
            </DesktopBar>
          </div>
        )}
        <Wrap>
          <SearchBar />
          <Icon src={searchIcon} alt="search" />
          <Icon src={userIcon} alt="user-icon" />
          <Icon src={bagIcon} alt="cart" />
        </Wrap>
      </Navbar>
    </>
  );
};
export default Header;

import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import styled from "styled-components";
import Popup from "reactjs-popup";
import bar from "../images/hamburgerBar.png";
import NavarButtons from "./NavbarButtons";
const logo = require("../images/epicure-logo.jpg");
const userIcon = require("../images/user-icon.png");
const bagIcon = require("../images/bag-icon.png");
const Navbar = styled.div`
  @media (min-width: 769px) {
    display: grid;
    grid-template-areas: "a b c d e";
    width: 100%;
    height: 50px;
    box-shadow: 0px 2px 3px 0 rgba(0, 0, 0, 0.05);
    background-color: white;
    margin-left: 3px;
  }
  @media (max-width: 768px) {
    display: grid;
    grid-template-areas: "a b c d";
    width: 100%;
    height: 50px;
    box-shadow: 0px 2px 3px 0 rgba(0, 0, 0, 0.05);
    background-color: white;
    margin-left: 3px;
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
  @media (min-width: 769px) {
    visibility: visible;
    grid-area: a;
    margin-top: 2%;
  }
  @media (max-width: 768px) {
    visibility: hidden;
  }
`;
const Logo = styled.img`
  @media (min-width: 769px) {
    grid-area: a;
    width: 8%;
    margin-left: 15%;
    margin-top: 1%;
  }
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
  @media (min-width: 769px) {
    grid-area: e;
    width: 12%;
    margin-left: -3%;
  }
  @media (max-width: 768px) {
    grid-area: c;
    text-align: right;
    margin-top: 8px;
    height: 25px;
    margin-right: 15px;
  }
`;
const IconBasket = styled.img`
  @media (min-width: 769px) {
    grid-area: e;
    width: 12%;
    margin-left: 20%;
  }
  @media (max-width: 768px) {
    grid-area: d;
    margin-top: 8px;
    height: 25px;
  }
`;

const Modal = styled.div`
  @media (max-width: 768px) {
    width: 100%;
    height: 844px;
    background-color: white;
  }
`;

const Button = styled.button`
  @media (min-width: 769px) {
    grid-area: b;
    font-size: 18px;
    font-family: HelveticaNeue-Thin;
    border: 0;
    margin-left: 10%;
    color: grey;
    background-color: white;
  }
`;

const ButtonEpicure = styled.button`
  @media (min-width: 769px) {
    grid-area: a;
    font-size: 24px;
    font-family: HelveticaNeue-thin;
    border: 0;
    margin-left: 25%;
    background-color: white;
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
            {(close: () => void) => (
              <Modal>
                <NavarButtons close={close} />
              </Modal>
            )}
          </Popup>
        </MobileBar>
        <DesktopBar>
          <ButtonEpicure onClick={navigatorHome}>Epicure</ButtonEpicure>
          <Button onClick={navigatorRes}>Restaurants</Button>
          <Button onClick={navigatorChefs}>Chefs</Button>
        </DesktopBar>
        <SearchBar />

        <IconProfile src={userIcon} alt="user-icon" />
        <IconBasket src={bagIcon} alt="cart" />
      </Navbar>
    </>
  );
};
export default Header;

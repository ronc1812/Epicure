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
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: 7vh;
  box-shadow: 0px 2px 3px 0 rgba(0, 0, 0, 0.05);
  background-color: white;
  @media only screen and (min-width: 600px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50px;
    box-shadow: 0px 2px 3px 0 rgba(0, 0, 0, 0.05);
    background-color: white;
  }
`;
const MobileBar = styled.div`
  visibility: visible;
  display: flex;
  gap: 110px;
  @media only screen and (min-width: 600px) {
    visibility: hidden;
  }
`;
const DesktopBar = styled.div`
  visibility: hidden;
  @media only screen and (min-width: 600px) {
    visibility: visible;
    grid-area: a;
    margin-top: 2%;
  }
`;
const Logo = styled.img`
  height: 4vh;
  @media (min-width: 769px) {
    grid-area: a;
    width: 8%;
    margin-left: 15%;
    margin-top: 1%;
  }
`;
const HamburgerBar = styled.button`
  width: 15vw;
  background-color: white;
  border: white;
`;
const BarLogo = styled(Logo)`
  height: 2.5vh;
`;
const IconProfile = styled.img`
  height: 3vh;
`;
const IconBasket = styled.img`
  height: 3vh;
`;

const Modal = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
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
  grid-area: a;
  font-size: 24px;
  font-family: HelveticaNeue-thin;
  border: 0;
  margin-left: 25%;
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
        <DesktopBar>
          <Logo src={logo} alt="logo" />
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

import { useNavigate } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import Popup from "reactjs-popup";
import bar from "../images/hamburgerBar.png";
import NavarButtons from "../navbar/NavbarButtons";
import searchIcon from "../images/search-icon.png";
import {
  Button,
  Navbar,
  StyledDiv,
  Search,
  BarLogo,
  ButtonEpicure,
  MobileBar,
  Modal,
  Icon,
  HamburgerBar,
  DesktopBar,
  Wrap,
  Logo,
} from "./style";
const logo = require("../images/epicure-logo.jpg");
const userIcon = require("../images/user-icon.png");
const bagIcon = require("../images/bag-icon.png");

const Header = () => {
  const isMobile = window.innerWidth <= 600;
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
        {isMobile ? (
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
              <StyledDiv>
                <Logo src={logo} alt="logo" />
                <ButtonEpicure onClick={navigatorHome}>EPICURE</ButtonEpicure>
              </StyledDiv>
              <Button onClick={navigatorRes}>Restaurants</Button>
              <Button onClick={navigatorChefs}>Chefs</Button>
            </DesktopBar>
          </div>
        )}
        <Wrap>
          {!isMobile && (
            <Search>
              <SearchBar header={false} />
            </Search>
          )}

          {isMobile && <Icon src={searchIcon} alt="search" />}
          <Icon src={userIcon} alt="user-icon" />
          <Icon src={bagIcon} alt="cart" />
        </Wrap>
      </Navbar>
    </>
  );
};
export default Header;

import styled from "styled-components";
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
    gap: 1%;
  }
`;
const Search = styled.div`
  width: -webkit-fill-available;
  justify-self: flex-end;
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
  gap: 10%;
  @media only screen and (min-width: 650px) {
    gap: 5%;
    width: 50%;
    justify-content: flex-end;
  }
`;
const DesktopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
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
  cursor: pointer;
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

const StyledDiv = styled.div`
  display: flex;
`;

export {
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
};

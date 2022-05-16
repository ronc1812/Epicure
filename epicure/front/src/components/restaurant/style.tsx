import styled from "styled-components";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  @media only screen and (min-width: 650px) {
    width: 60%;
    gap: 15px;
  }
`;
const Dishes = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media only screen and (min-width: 650px) {
    flex-wrap: nowrap;
    justify-content: flex-start;
    gap: 30px;
  }
`;
const Navbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  width: 100%;
  height: 8vh;
  box-shadow: 0px 2px 3px 0 rgba(0, 0, 0, 0.05);
  @media only screen and (min-width: 650px) {
    width: 40%;
    box-shadow: 0px 0px 0px 0px;
    gap: 50px;
  }
`;
const StyledButton = styled.button`
  border: 0;
  background-color: white;
  font-size: 17px;
  font-family: HelveticaNeue-thin;
  cursor: pointer;
  :hover {
    border-bottom: 1px solid orange;
  }
  @media only screen and (min-width: 650px) {
    font-size: 25px;
  }
`;
const Wrap = styled.div`
  @media only screen and (min-width: 650px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
  }
`;
const Div = styled.div`
  width: 50%;
  @media only screen and (min-width: 650px) {
    width: 45%;
  }
`;
const Picture = styled.img`
  width: 100%;
  height: 35vh;
  @media only screen and (min-width: 650px) {
    width: 100%;
    height: 50vh;
  }
`;

const Name = styled.header`
  font-size: 35px;
  font-family: HelveticaNeue;
  @media only screen and (min-width: 650px) {
    font-size: 50px;
  }
`;
const Chef = styled(Name)`
  font-size: 24px;
  font-family: HelveticaNeue-Thin;
  @media only screen and (min-width: 650px) {
    font-size: 30px;
  }
`;
const Open = styled(Name)`
  font-family: HelveticaNeue-thin;
  font-size: 12px;
  @media only screen and (min-width: 650px) {
    font-size: 18px;
  }
`;

export {
  Open,
  Chef,
  Wrap,
  Wrapper,
  Picture,
  Dishes,
  Div,
  StyledButton,
  Navbar,
  Name,
};

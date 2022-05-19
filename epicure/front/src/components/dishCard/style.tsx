import styled from "styled-components";
const Wrapper = styled.div`
  width: 45vw;
  height: 40vh;
  display: flex;
  flex-direction: column;
  gap: 0px;
  @media only screen and (min-width: 650px) {
    width: 25vw;
    height: 45vh;
  }
`;

const Info = styled.div`
  background-color: #f7e0b2;
  display: flex;
  height: 25vh;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media only screen and (min-width: 650px) {
    height: 25vh;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
const Picture = styled.img`
  width: 100%;
  height: 15vh;
  @media only screen and (min-width: 650px) {
    height: 20vh;
  }
`;

const Headline = styled.header`
  font-size: 15px;
  font-family: HelveticaNeue;
  margin-top: 20%;
  @media only screen and (min-width: 650px) {
    margin-top: 10%;
    font-size: 20px;
  }
`;
const Label = styled.label`
  font-size: 13px;
  font-family: HelveticaNeue-thin;
  text-align: center;
  @media only screen and (min-width: 650px) {
    font-size: 20px;
  }
`;
const Price = styled.label`
  font-size: 20px;
  font-family: HelveticaNeue;
  text-align: center;
  display: flex;
  align-items: center;
  @media only screen and (min-width: 650px) {
  }
`;

export { Picture, Price, Label, Headline, Container, Info, Wrapper };

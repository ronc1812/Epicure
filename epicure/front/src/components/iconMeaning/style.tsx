import styled from "styled-components";

const Headline = styled.header`
  font-size: 13px;
  font-family: HelveticaNeue-thin;
  text-align: center;
  @media only screen and (min-width: 650px) {
    font-size: 30px;
  }
`;

const Wrapper = styled.div`
  background-color: #cdc9c9;
  width: 100%;
  height: 15vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  @media only screen and (min-width: 650px) {
    gap: 35px;
    height: 30vh;
  }
`;
const Icons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  gap: 40px;
  @media only screen and (min-width: 650px) {
    gap: 100px;
  }
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;
const Label = styled.label`
  font-size: 14px;
  font-family: HelveticaNeue-thin;
`;

const Picture = styled.img`
  width: 50%;
  @media only screen and (min-width: 650px) {
    width: 85%;
  }
`;
const Veget = styled.img`
  width: 45%;
  @media only screen and (min-width: 650px) {
    width: 75%;
  }
`;
export { Label, Wrapper, Icons, Headline, Container, Picture, Veget };

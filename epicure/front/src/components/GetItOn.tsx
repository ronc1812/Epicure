import apple from "./images/apple-icon.png";
import google from "./images/google-icon.png";
import styled from "styled-components";

const Wrapper = styled.div`
  border: solid 0.5px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 28px;
  width: 130px;
  @media only screen and (min-width: 650px) {
    gap: 1vw;
    height: 7vh;
    width: 15vw;
  }
`;
const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
  @media only screen and (min-width: 650px) {
    margin-top: 50px;
    gap: 10px;
  }
`;
const Labels = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Info = styled.label`
  font-size: 9.2px;
  letter-spacing: 0.9px;
  font-family: HelveticaNeue;
  @media only screen and (min-width: 650px) {
    font-size: 13.2px;
  }
`;
const GetItOn = () => {
  return (
    <>
      <Icons>
        <Wrapper>
          <img src={apple} alt="apple" />
          <Labels>
            <Info>Download on the</Info>
            <Info>App Store</Info>
          </Labels>
        </Wrapper>
        <Wrapper>
          <img src={google} alt="google" />
          <Labels>
            <Info>Download on the</Info>
            <Info>Google Play</Info>
          </Labels>
        </Wrapper>
      </Icons>
    </>
  );
};
export default GetItOn;

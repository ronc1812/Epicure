import styled from "styled-components";
const Headline = styled.header`
  font-size: 13px;
  font-family: HelveticaNeue-thin;
  text-align: center;
  margin-top: 20px;
  @media only screen and (min-width: 650px) {
    font-size: 30px;
    text-align: left;
  }
`;
const Res = styled.img`
  width: 70%;
  background-color: var(#cdc9c9);
  @media only screen and (min-width: 650px) {
    width: 150%;
  }
`;
const InfoOnSite = styled.div`
  font-size: 13px;
  width: 90%;
  font-family: HelveticaNeue-thin;
  text-align: center;

  @media only screen and (min-width: 650px) {
    width: 80%;
    font-size: 18px;
    text-align: left;
  }
`;
const Picture = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  @media only screen and (min-width: 650px) {
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }
`;
const Wrapper = styled.div`
  background-color: #cdc9c9;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: 650px) {
    flex-direction: row;
  }
`;
const InfoDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media only screen and (min-width: 650px) {
    width: 50%;
    gap: 10px;
    align-items: flex-start;
  }
`;

export { InfoDiv, InfoOnSite, Wrapper, Picture, Res, Headline };

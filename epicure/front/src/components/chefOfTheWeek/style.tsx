import styled from "styled-components";
const Headline = styled.header`
  font-size: 13px;
  font-family: HelveticaNeue-thin;
  text-align: center;
  @media only screen and (min-width: 650px) {
    font-size: 30px;
  }
`;
const Picture = styled.img`
  width: 90%;
  @media only screen and (min-width: 650px) {
    width: 35%;
  }
`;

const Info = styled.div`
  font-size: 13px;
  width: 90%;
  font-family: HelveticaNeue-thin;
  @media only screen and (min-width: 650px) {
    width: 35%;
    font-size: 18px;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  width: 80%;
  font-family: HelveticaNeue-thin;
`;
export { Headline, Picture, Info, Wrapper };

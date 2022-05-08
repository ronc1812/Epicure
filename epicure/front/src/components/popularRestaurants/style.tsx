import styled from "styled-components";
const Wrap = styled.div`
  margin-top: 15%;
  @media only screen and (min-width: 650px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
  }
`;
const Div = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  margin-top: 1%;
`;
const Headline = styled.header`
  font-size: 13px;
  font-family: HelveticaNeue-thin;
  margin-top: 20px;
  text-align: start;
  margin-left: 5%;
  @media only screen and (min-width: 650px) {
    font-size: 30px;
    text-align: center;
  }
`;

const All = styled.button`
  visibility: hidden;
  @media only screen and (min-width: 650px) {
    visibility: visible;
    border: 0;
    background-color: white;
    font-family: HelveticaNeue-thin;
    font-size: 25px;
    align-self: flex-end;
    margin-right: 2%;
  }
`;
export { All, Headline, Div, Wrap };

import styled from "styled-components";
const Headline = styled.header`
  font-size: 13px;
  font-family: HelveticaNeue-thin;
  margin-left: 5%;
  @media only screen and (min-width: 650px) {
    font-size: 30px;
    text-align: center;
  }
`;
const Wrapper = styled.div`
  @media only screen and (min-width: 650px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    margin-top: 10vh;
  }
`;
const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  @media only screen and (min-width: 650px) {
    gap: 11px;
  }
`;
export { Wrap, Wrapper, Headline };

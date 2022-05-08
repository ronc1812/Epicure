import styled from "styled-components";
const Wrapper = styled.div`
  width: inherit;
  background-color: inherit;
`;

const Result = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: absolute;
  background-color: white;
  @media only screen and (min-width: 650px) {
    width: inherit;
  }
`;
const Header = styled.header`
  color: rgba(0, 0, 0, 0.35);
  font-size: 14px;
  font-family: HelveticaNeue-Thin;
`;

const Label = styled.header`
  color: black;
  font-size: 15px;
  font-family: HelveticaNeue-Thin;
`;

export { Wrapper, Result, Header, Label };

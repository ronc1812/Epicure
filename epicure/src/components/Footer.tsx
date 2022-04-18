import styled from "styled-components";
const Wrapper = styled.div`
  @media (max-width: 768px) {
    display: grid;
    grid-template-areas:
      "a"
      "b"
      "c";
    background-color: white;
    border-top: 1px solid #cdc9c9;
    bottom: 0;
    width: 390px;
    margin-left: -8px;
  }
`;
const StyledButton = styled.button`
  @media (max-width: 768px) {
    border: 0;
    margin-top: 12px;
    background-color: white;
    font-size: 12px;
    font-family: HelveticaNeue-thin;
  }
`;
const Footer = () => {
  return (
    <>
      <Wrapper>
        <StyledButton>Contact us</StyledButton>
        <StyledButton>Terms Of Use</StyledButton>
        <StyledButton>Privacy Policy</StyledButton>
      </Wrapper>
    </>
  );
};
export default Footer;

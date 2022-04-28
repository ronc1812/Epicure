import styled from "styled-components";
const Header = styled.header`
  font-family: HelveticaNeue-Thin;
  font-size: 17px;
  border-bottom: 1px solid orange;
  text-align: center;
  margin: 5% 30%;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5%;
  font-family: HelveticaNeue-thin;
  font-size: 15px;
`;
const ChooseSide: React.FC<{ sides: string[] }> = (props) => {
  return (
    <div style={{ marginTop: "10%" }}>
      <Header>Choose a side</Header>
      <Wrapper>
        {props.sides.map((side) => {
          return (
            <div key={side}>
              <input type="radio" value={side} key={side} placeholder={side} />
              {side}
            </div>
          );
        })}
      </Wrapper>
    </div>
  );
};
export default ChooseSide;

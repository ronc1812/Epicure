import { Header, Wrapper, StyledDiv } from "./style";
const ChooseSide: React.FC<{ sides: string[] }> = (props) => {
  const { sides } = props;
  return (
    <StyledDiv>
      <Header>Choose a side</Header>
      <Wrapper>
        {sides.map((side) => {
          return (
            <div key={side}>
              <input type="radio" value={side} key={side} placeholder={side} />
              {side}
            </div>
          );
        })}
      </Wrapper>
    </StyledDiv>
  );
};
export default ChooseSide;

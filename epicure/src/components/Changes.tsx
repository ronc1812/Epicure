import React from "react";
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
  font-family: HelveticaNeue-thin;
  font-size: 15px;
  margin-left: 5%;
`;
const Changes: React.FC<{ changes: string[] }> = (props) => {
  return (
    <div>
      <Header>Changes</Header>
      <Wrapper>
        {props.changes.map((change) => {
          return (
            <div key={change}>
              <input type="checkbox" value={change} key={change} />
              {""} {change}
            </div>
          );
        })}
      </Wrapper>
    </div>
  );
};
export default Changes;

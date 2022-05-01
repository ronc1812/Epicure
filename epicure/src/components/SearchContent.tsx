import { useEffect, useState } from "react";
import styled from "styled-components";
import getSearchResults from "../services/getSearchResults";
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
const SearchContent: React.FC<{ query: string }> = (props) => {
  const [info, setInfo] = useState(getSearchResults(props.query.toLowerCase()));
  useEffect(() => {
    setInfo(getSearchResults(props.query.toLowerCase()));
  }, []);
  return (
    <Wrapper>
      {info[0].length !== 0 && (
        <Result>
          <Header>Restaurants :</Header>
          {info[0]?.map((res) => {
            return <Label key={res}>{res}</Label>;
          })}
        </Result>
      )}

      {info[1].length !== 0 && (
        <Result>
          <Header>Chefs : </Header>
          {info[1]?.map((chef) => {
            return <Label key={chef}>{chef}</Label>;
          })}
        </Result>
      )}
    </Wrapper>
  );
};
export default SearchContent;

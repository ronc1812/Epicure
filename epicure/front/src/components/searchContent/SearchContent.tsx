import { useEffect, useState } from "react";
import getSearchResults from "../../services/getSearchResults";
import { Wrapper, Result, Header, Label } from "./style";
const SearchContent: React.FC<{ query: string }> = (props) => {
  const [info, setInfo] = useState<string[][]>();
  useEffect(() => {
    async function getInfo() {
      const data = await getSearchResults(props.query.toLowerCase());
      setInfo(data);
    }
    getInfo();
  }, []);
  return (
    <Wrapper>
      {info && [0].length !== 0 && (
        <Result>
          <Header>Restaurants :</Header>
          {info[0]?.map((res) => {
            return <Label key={res}>{res}</Label>;
          })}
        </Result>
      )}

      {info && [1].length !== 0 && (
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

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import getSearchResults from "../../services/getSearchResults";
import { Wrapper, Result, Header, Label } from "./style";
const SearchContent: React.FC<{ query: string; header: boolean }> = (props) => {
  const [info, setInfo] = useState<string[][]>();
  const { header } = props;
  const navigator = useNavigate();

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
        <Result isHeaderSearchBar={header}>
          <Header>Restaurants :</Header>
          {info[0]?.map((res) => {
            return (
              <Label key={res} onClick={() => navigator(`/restaurants/${res}`)}>
                {res}
              </Label>
            );
          })}
        </Result>
      )}

      {info && [1].length !== 0 && (
        <Result isHeaderSearchBar={header}>
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

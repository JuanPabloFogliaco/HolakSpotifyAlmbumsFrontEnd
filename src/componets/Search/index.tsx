import { FiSearch } from "react-icons/fi";
import { Search, WrapperSearch } from "./style";

interface ISearchComponent {
  onChangeSearch: (e: any) => void;
  onKeyDownSearch: (e: any) => void;
}

const SearchComponent = (props: ISearchComponent) => {
  const { onChangeSearch, onKeyDownSearch } = props;
  return (
    <WrapperSearch>
      <FiSearch
        style={{ left: "45px", position: "relative" }}
        size={"30px"}
        color={"black"}
      />
      <Search
        type={"text"}
        onChange={(e: any) => onChangeSearch(e)}
        placeholder="¿Que te apetece escuchar?"
        onKeyDown={(e: any) => onKeyDownSearch(e)}
      />
    </WrapperSearch>
  );
};
export default SearchComponent;

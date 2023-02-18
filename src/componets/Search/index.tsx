import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { Search, WrapperSearch } from "./style";

const SearchComponent = () => {
  const [search, setSearch] = useState();

  const onChangeSearch = (e: any) => {
    setSearch(e.target.value);
  };

  return (
    <WrapperSearch>
      <FiSearch
        style={{ left: "45px", position: "relative" }}
        size={"30px"}
        color={"black"}
      />
      <Search
        type={"text"}
        onChange={(e) => onChangeSearch(e)}
        placeholder="¿Que te apetece escuchar?"
      />
    </WrapperSearch>
  );
};
export default SearchComponent;

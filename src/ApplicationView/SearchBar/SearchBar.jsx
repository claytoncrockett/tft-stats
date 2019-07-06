import React from "react";
import { CustomSearchBar } from "./SearchBarStyledComponents";

export const SearchBar = ({ onSearchChange, search }) => {
  return (
    <CustomSearchBar
      type="text"
      key="searchBar"
      value={search}
      onChange={e => {
        e.preventDefault();
        onSearchChange(e.target.value);
      }}
    />
  );
};

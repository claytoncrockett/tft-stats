import React from "react";
import { SearchBar } from "./SearchBar/SearchBar";
import { ChampionView } from "./ChampionView/ChampionView";

class ApplicationView extends React.Component {
  state = { search: "" };

  onSearchChange = value => {
    this.setState({ search: value });
  };

  render() {
    return (
      <>
        <SearchBar
          onSearchChange={this.onSearchChange}
          search={this.state.search}
        />
        <ChampionView search={this.state.search} />
      </>
    );
  }
}

export default ApplicationView;

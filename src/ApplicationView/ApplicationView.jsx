import React from "react";
import { SearchBar } from "./SearchBar/SearchBar";
import { ChampionView } from "./ChampionView/ChampionView";

class ApplicationView extends React.Component {
  render() {
    return (
      <>
        <SearchBar
          onSearchChange={this.props.onSearchChange}
          search={this.props.search}
        />
        {this.props.children}
      </>
    );
  }
}

export default ApplicationView;

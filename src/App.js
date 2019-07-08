import React from "react";
import { Route, Switch } from "react-router-dom";
import ApplicationView from "./ApplicationView/ApplicationView.jsx";
import { ItemView } from "./ApplicationView/ItemView/ItemView.jsx";
import { ChampionView } from "./ApplicationView/ChampionView/ChampionView.jsx";
import { NavBar } from "./NavBar/NavBar.jsx";

class App extends React.Component {
  state = { search: "" };

  onSearchChange = value => {
    this.setState({ search: value });
  };

  render() {
    return (
      <>
        <NavBar />
        <ApplicationView
          search={this.state.search}
          onSearchChange={this.onSearchChange}
        >
          <Switch>
            <Route
              exact
              path="/"
              component={() => <ChampionView search={this.state.search} />}
            />
            <Route
              exact
              path="/champions"
              component={() => <ChampionView search={this.state.search} />}
            />
            <Route
              exact
              path="/items"
              component={() => <ItemView search={this.state.search} />}
            />
            {/* <Route path="/classes" component={ApplicationView} /> */}
            {/* <Route path="/origins" component={ApplicationView} /> */}
          </Switch>
        </ApplicationView>
      </>
    );
  }
}

export default App;

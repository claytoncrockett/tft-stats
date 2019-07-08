import React from "react";
import { Link } from "react-router-dom";
import { NavBarContainer, NavBarItem } from "./NavBarStyledComponents";

export const NavBar = () => {
  return (
    <NavBarContainer>
      <Link to="/champions">
        <NavBarItem>Champions</NavBarItem>
      </Link>
      <Link to="/items">
        <NavBarItem>Items</NavBarItem>
      </Link>
      <Link to="/origins">
        <NavBarItem>Origins</NavBarItem>
      </Link>
      <Link to="/classes">
        <NavBarItem>Classes</NavBarItem>
      </Link>
      <Link to="/tiers">
        <NavBarItem>Tier List</NavBarItem>
      </Link>
    </NavBarContainer>
  );
};

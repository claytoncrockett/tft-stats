import styled from "styled-components";

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const NavBarItem = styled.div`
  width: 100px;
  padding: 8px;

  :hover {
    cursor: pointer;
    background-color: rgba(200, 200, 200, 0.4);
  }
`;

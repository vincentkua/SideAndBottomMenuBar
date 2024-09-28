import styled from "styled-components";

export const SideMenuBarArea = styled.div`
  border: 1px solid gray;
  width: 200px;
  background-color: #1b1b1b;
`;

export const SideMenuLogo = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  padding: 12px;
  color: lightgray;
  font-weight: bold;
`;

export const SideMenubarDivBox = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  cursor: pointer;
  padding: 12px;
  color: #9e9e9e;

  &:hover {
    background-color: #2b2b2b;
    color: #e6e6e6;
  }
`;

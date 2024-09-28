import styled from "styled-components";

export const SideMenuBarArea = styled.div`
  background-color: #111111;
  flex: 0 0 200px;
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

export const BottomMenuBarArea = styled.div`
  background-color: #111111;
  flex: 0 0 70px;
  display: flex;
  justify-content: space-around;
  padding : 0px 4px 2px;
`;

export const BottomMenubarDivBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  cursor: pointer;
  padding: 12px;
  color: #9e9e9e;
  font-size: 10px;

  &:hover {
    color: #e6e6e6;
  }
`;

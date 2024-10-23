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

export const BottomMenuReserveDiv = styled.div`
  display: none;
  @media (max-width: 800px) {
    display: block;
    background-color: #ffffff;
    height: 100px;
  }
`;

export const BottomMenuFixedDiv = styled.div`
  display: none;
  @media (max-width: 800px) {
    display: block;
    overflow: hidden;
    background-color: #111111;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 80px;
  }
`;

export const BottomMenuBarArea = styled.div`
  display: flex;
  justify-content: space-around;
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

export const FullHeightFlexBox = styled.div`
  display: flex;
  height: 100vh;
`;

export const AppContentArea = styled.div`
  flex-grow: 1;
  border: 1px solid gray;
  background-color: #ffffff;
  overflow-y: scroll;
`;

import styled from "styled-components";
import TopBannerPng from "./bluebanner.png";

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

  > p {
    margin: 0;
  }
`;

export const SideMenubarDivBox = styled.div<{ selected: boolean }>`
  display: flex;
  align-items: center;
  height: 48px;
  cursor: pointer;
  padding: 12px;
  color: ${({ selected }) => (selected ? "#ffffff" : "#707070")};

  > p {
    margin: 0;
  }

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

export const BottomMenubarDivBox = styled.div<{ selected: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  cursor: pointer;
  padding: 12px;
  color: ${({ selected }) => (selected ? "#ffffff" : "#707070")};
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
  overflow-y: auto;
`;

export const TopMenuArea = styled.div`
  height: 150px;
  padding: 16px;
  background-color: #dddddd;
  color: #ffffff;
  margin: 0;
  font-weight: bold;
  background-image: url(${TopBannerPng});
  background-size: cover;
  background-position: center;

  > div:nth-child(1) {
    color: white;
    margin-top: 2px;
  }
  > div:nth-child(2) {
    color: #ffffff;
    font-weight: normal;
    font-size: 14px;
    margin-top: 24px;
  }
  > div:nth-child(3) {
    color: #ffffff;
    font-weight: normal;
    font-size: 10px;
  }
`;

export const BodyContentArea = styled.div`
  padding: 16px;
  font-size: 14px;
`;

import {
  HomeIcon,
  InfoIcon,
  SettingsIcon,
  ShoppingCartIcon,
} from "lucide-react";
import {
  BottomMenuBarArea,
  BottomMenubarDivBox,
  BottomMenuReserveDiv,
  BottomMenuStickyDiv,
} from "./styled.component";
import { useNavigate } from "react-router-dom";

const MenubarBottom = () => {
  const navigate = useNavigate();
  return (
    <>
      <BottomMenuReserveDiv />
      <BottomMenuStickyDiv>
        <BottomMenuBarArea>
          <BottomMenubarDivBox onClick={() => navigate("/")}>
            <HomeIcon size={24} />
            <p>Home</p>
          </BottomMenubarDivBox>
          <BottomMenubarDivBox onClick={() => navigate("/products")}>
            <ShoppingCartIcon size={24} />
            <p>Products</p>
          </BottomMenubarDivBox>
          <BottomMenubarDivBox onClick={() => navigate("/about")}>
            <InfoIcon size={24} />
            <p>About</p>
          </BottomMenubarDivBox>
          <BottomMenubarDivBox onClick={() => navigate("/settings")}>
            <SettingsIcon size={24} />
            <p>Settings</p>
          </BottomMenubarDivBox>
        </BottomMenuBarArea>
      </BottomMenuStickyDiv>
    </>
  );
};

export default MenubarBottom;

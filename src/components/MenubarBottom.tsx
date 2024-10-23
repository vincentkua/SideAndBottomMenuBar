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
  BottomMenuFixedDiv,
} from "./styled.component";
import { useNavigate } from "react-router-dom";

const MenubarBottom = () => {
  const navigate = useNavigate();
  return (
    <>
      <BottomMenuReserveDiv />
      <BottomMenuFixedDiv>
        <BottomMenuBarArea>
          <BottomMenubarDivBox onClick={() => navigate("/")} selected={true}>
            <HomeIcon size={24} />
            <p>Home</p>
          </BottomMenubarDivBox>
          <BottomMenubarDivBox onClick={() => navigate("/products")} selected={false}>
            <ShoppingCartIcon size={24} />
            <p>Products</p>
          </BottomMenubarDivBox>
          <BottomMenubarDivBox onClick={() => navigate("/about")} selected={false}>
            <InfoIcon size={24} />
            <p>About</p>
          </BottomMenubarDivBox>
          <BottomMenubarDivBox onClick={() => navigate("/settings")} selected={false}>
            <SettingsIcon size={24} />
            <p>Settings</p>
          </BottomMenubarDivBox>
        </BottomMenuBarArea>
      </BottomMenuFixedDiv>
    </>
  );
};

export default MenubarBottom;

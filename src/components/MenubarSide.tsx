import {
  FlameIcon,
  HomeIcon,
  InfoIcon,
  SettingsIcon,
  ShoppingCartIcon,
} from "lucide-react";
import {
  SideMenuBarArea,
  SideMenubarDivBox,
  SideMenuLogo,
} from "./styled.component";
import { useNavigate } from "react-router-dom";

const MenubarSide = () => {
  const navigate = useNavigate();

  return (
    <>
      <SideMenuBarArea>
        <SideMenuLogo>
          <FlameIcon fill="red" strokeWidth={0} size={24} style={{ marginRight: "15px" }}/>
          <p>Sample App</p>
        </SideMenuLogo>
        <SideMenubarDivBox onClick={() => navigate("/")}>
          <HomeIcon size={24} style={{ marginRight: "15px" }} />
          <p>Home</p>
        </SideMenubarDivBox>
        <SideMenubarDivBox onClick={() => navigate("/products")}>
          <ShoppingCartIcon size={24} style={{ marginRight: "15px" }} />
          <p>Products</p>
        </SideMenubarDivBox>
        <SideMenubarDivBox onClick={() => navigate("/about")}>
          <InfoIcon size={24} style={{ marginRight: "15px" }} />
          <p>About</p>
        </SideMenubarDivBox>
        <SideMenubarDivBox onClick={() => navigate("/settings")}>
          <SettingsIcon size={24} style={{ marginRight: "15px" }} />
          <p>Settings</p>
        </SideMenubarDivBox>
      </SideMenuBarArea>
    </>
  );
};

export default MenubarSide;

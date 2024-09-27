import { HomeIcon, InfoIcon, SettingsIcon, ShoppingCartIcon } from "lucide-react";
import { SideMenubarDivBox } from "./styled.component";
import { useNavigate } from "react-router-dom";

const MenubarSide = () => {

  const navigate = useNavigate();

  return (
    <>
      <div
        style={{
          border: "1px solid gray",
          width: "200px",
          backgroundColor: "#2e2e2e",
        }}
      >
        <SideMenubarDivBox onClick={()=>navigate("/")}>
          <HomeIcon color="lightgray" size={24} style={{ margin: "10px" }} />
          <p style={{ color: "lightgray" }}>Home</p>
        </SideMenubarDivBox>
        <SideMenubarDivBox onClick={()=>navigate("/products")}>
          <ShoppingCartIcon color="lightgray" size={24} style={{ margin: "10px" }} />
          <p style={{ color: "lightgray" }}>Products</p>
        </SideMenubarDivBox>
        <SideMenubarDivBox onClick={()=>navigate("/about")}>
          <InfoIcon color="lightgray" size={24} style={{ margin: "10px" }} />
          <p style={{ color: "lightgray" }}>About</p>
        </SideMenubarDivBox>
        <SideMenubarDivBox onClick={()=>navigate("/settings")}>
          <SettingsIcon color="lightgray" size={24} style={{ margin: "10px" }} />
          <p style={{ color: "lightgray" }}>Settings</p>
        </SideMenubarDivBox>
      </div>
    </>
  );
};

export default MenubarSide;

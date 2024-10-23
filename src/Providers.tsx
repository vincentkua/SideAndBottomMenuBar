import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Settings from "./pages/Settings";
import MenubarSide from "./components/MenubarSide";
import MenubarBottom from "./components/MenubarBottom";
import { useWindowSize } from "./utils/useWindowSize";
import {
  AppContentArea,
  FullHeightFlexBox,
} from "./components/styled.component";

const Providers = () => {
  const { width } = useWindowSize();
  const mobileScreen = width <= 760;

  return (
    <BrowserRouter>
      <FullHeightFlexBox>
        {!mobileScreen && <MenubarSide />}
        <AppContentArea>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
          {mobileScreen && <MenubarBottom />}
        </AppContentArea>
      </FullHeightFlexBox>
    </BrowserRouter>
  );
};

export default Providers;

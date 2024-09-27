import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Settings from "./pages/Settings";
import MenubarSide from "./components/MenubarSide";
import MenubarBottom from "./components/MenubarBottom";
import { useWindowSize } from "./utils/useWindowSize";

const Providers = () => {
  const { width } = useWindowSize();
  const mobileScreen = width <= 760;

  return (
    <>
      <BrowserRouter>
        <div
          style={{
            display: "flex",
            border: "1px solid gray",
            height: "100vh",
          }}
        >
          {!mobileScreen && <MenubarSide />}
          <div
            style={{
              display: "flex",
              flexGrow: "1",
              flexDirection: "column",
              border: "1px solid gray",
            }}
          >
            <div style={{ flexGrow: 1 }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/about" element={<About />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </div>
            {mobileScreen && <MenubarBottom />}
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};

export default Providers;

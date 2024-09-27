import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./assets/pages/Home";
import Products from "./assets/pages/Products";
import About from "./assets/pages/About";
import Settings from "./assets/pages/Settings";

const Providers = () => {
  return (
    <>
      <BrowserRouter>
        <div style={{ display: "flex", gap: "5px" }}>
          <Link to={"/"}>Home</Link>
          <Link to={"/products"}>Product</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/settings"}>Settings</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Providers;

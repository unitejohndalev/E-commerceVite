//import components
import Home from "./pages/Home";

import HMProducts from "./components/HMProducts";
import HerschelProducts from "./components/HerschelProducts";

import HMProductDescription from "./context/HMProductDescription";
import HerschelProductDescription from "./context/HerschelProductDescription";

//import pages
import ProductsInfo from "./pages/ProductsInfo";
import ErrorPage from "./pages/errorpage";
import AboutUs from "./pages/AboutUs";
import ShoeProducts from "./pages/ShoeProducts";

//import nav
import Nav from "./components/Nav";

//import routes and route
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shoeproducts" element={<ShoeProducts />} />
        <Route path="/hmproducts" element={<HMProductDescription />} />
        <Route
          path="/herschelproducts"
          element={<HerschelProductDescription />}
        />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      {/* <HMProducts /> */}
      {/* <HerschelProducts /> */}

      {/* <HMProductDescription /> */}
      {/* <HerschelProductDescription /> */}
    </Router>
  );
}

export default App;


//import pages
import Home from "./pages/Home";
import ErrorPage from "./pages/errorpage";
import BagProducts from "./pages/BagProducts";
import ShoeProducts from "./pages/ShoeProducts";
import ClothingProducts from "./pages/ClothingProducts";
import FirstUnknownProducts from "./pages/FirstUnknownProducts";
import SecondUnknownProducts from "./pages/SecondUnknownProducts";
import FeatureProducts from "./pages/FeatureProducts";
import OffProducts from "./pages/OffProducts";
import AboutUs from "./pages/AboutUs";

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
        <Route path="/clothingproducts" element={<ClothingProducts />} />
        <Route path="/bagproducts" element={<BagProducts />} />
        <Route
          path="/firstunknownproducts"
          element={<FirstUnknownProducts />}
        />
        <Route
          path="/secondunknownproducts"
          element={<SecondUnknownProducts />}
        />
        <Route path="/featureproducts" element={<FeatureProducts />} />
        <Route path="/offproducts" element={<OffProducts />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;

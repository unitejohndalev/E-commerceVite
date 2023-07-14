import React, { Suspense, lazy } from "react";

//import pages
import Home from "../pages/Home";
import ErrorPage from "../pages/errorpage";
// import ProductProvider from "../contexts/ProductContext";

//import nav
import Nav from "./Nav";

//import fallbackloading for suspense
import Fallbackloading from "./Fallbackloading"



//import routes and route
import { Route, Routes } from "react-router-dom";

//code splitting by using lazy and suspense from react
const YourCartContext = lazy(() => import("../contexts/YourCartContext"));
const HatProducts = lazy(() => import("../pages/hatproductpage/HatProducts"));
const HatProductDescription = lazy(() =>
  import("../productDescriptions/HatsProductDescription")
);
const ClothingProducts = lazy(() =>
  import("../pages/clothingproductpage/ClothingProducts")
);
const ClothProductDescription = lazy(() =>
  import("../productDescriptions/ClothProductDescription")
);
const ShoeProducts = lazy(() =>
  import("../pages/shoeproductpage/NikeProducts")
);
const ShoeProductDescription = lazy(() =>
  import("../productDescriptions/ShoesDescriptions")
);
const BagProducts = lazy(() => import("../pages/BagProducts"));
const BagProductDescription = lazy(() =>
  import("../productDescriptions/BagProductDescription")
);
const AccessoriesProducts = lazy(() => import("../pages/AccessoriesProducts"));
const SecondUnknownProducts = lazy(() =>
  import("../pages/SecondUnknownProducts")
);
const FeatureProducts = lazy(() =>
  import("../pages/featureproductpage/FeatureProducts")
);
const OffProducts = lazy(() => import("../pages/offproductpage/OffProducts"));
const AboutUs = lazy(() => import("../pages/aboutuspage/AboutUs"));

//Bags
import MKBags from "./MKProducts";
import HerschelBags from "./HerschelProducts";

//Clothes

//Shoes

//Hats

//Accessories

const Router = () => {
  return (
    <>
      <Nav />
      <Suspense fallback={<Fallbackloading/>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hatproducts" element={<HatProducts />} />
          <Route
            path="/hatdescription/:id"
            element={<HatProductDescription />}
          />
          {/* Hats pages brands*/}

          <Route path="/clothingproducts" element={<ClothingProducts />} />
          <Route
            path="/clothdescription/:id"
            element={<ClothProductDescription />}
          />
          <Route path="/yourcart" element={<YourCartContext />} />

          {/* Clothes pages brands*/}

          <Route path="/shoeproducts" element={<ShoeProducts />} />
          <Route
            path="/shoedescription/:id"
            element={<ShoeProductDescription />}
          />
          {/* Shoes pages brands*/}

          <Route path="/bagproducts" element={<BagProducts />} />

          {/* Bags pages brands*/}

          <Route path="/mkbags" element={<MKBags />} />
          <Route path="/herschelbags/" element={<HerschelBags />} />
          <Route
            path="/bagdescription/:id"
            element={<BagProductDescription />}
          />

          <Route
            path="/accessoriesproducts"
            element={<AccessoriesProducts />}
          />
          {/* Accessories pages brands*/}

          <Route
            path="/secondunknownproducts"
            element={<SecondUnknownProducts />}
          />
          <Route path="/featureproducts" element={<FeatureProducts />} />
          <Route path="/offproducts" element={<OffProducts />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default Router;

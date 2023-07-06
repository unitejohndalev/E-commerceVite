import React, { Suspense, lazy } from "react";



//import pages
import Home from "./pages/Home";
import ErrorPage from "./pages/errorpage";

//import nav
import Nav from "./components/Nav";

//import routes and route
import {Route, Routes } from "react-router-dom";

//code splitting by using lazy and suspense from react
const HatProducts = lazy(() => import("./pages/HatProducts"))
const HatProductDescription = lazy(() => import("./context/HatsProductDescription"));
const ClothingProducts = lazy(() => import("./pages/ClothingProducts"));
const ClothProductDescription = lazy(() =>
  import("./context/ClothProductDescription")
);
const ShoeProducts = lazy(() => import("./components/NikeProducts"));
const ShoeProductDescription = lazy(() => import("./context/ShoesDescriptions"));
const BagProducts = lazy(() => import("./pages/BagProducts"));
const BagProductDescription = lazy(() => import("./context/BagProductDescription"))
const AccessoriesProducts = lazy(() => import("./pages/AccessoriesProducts"));
const SecondUnknownProducts = lazy(() =>
  import("./pages/SecondUnknownProducts")
);
const FeatureProducts = lazy(() => import("./pages/FeatureProducts"));
const OffProducts = lazy(() => import("./pages/OffProducts"));
const AboutUs = lazy(() => import("./pages/AboutUs"));

function App() {
  return (
 
      <>
        <Nav />
        <Suspense fallback={<h1>loading ....</h1>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hatproducts" element={<HatProducts />} />
            <Route
              path="/hatdescription/:id"
              element={<HatProductDescription />}
            />
            <Route path="/clothingproducts" element={<ClothingProducts />} />
            <Route
              path="/clothdescription/:id"
              element={<ClothProductDescription />}
            />

            <Route path="/shoeproducts" element={<ShoeProducts />} />
            <Route
              path="/shoedescription/:id"
              element={<ShoeProductDescription />}
            />
            <Route path="/bagproducts" element={<BagProducts />} />
            <Route
              path="/bagdescription/:id"
              element={<BagProductDescription />}
            />
            <Route
              path="/accessoriesproducts"
              element={<AccessoriesProducts />}
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
        </Suspense>
      </>

  );
}

export default App;

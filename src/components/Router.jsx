import React, { Suspense, lazy } from "react";

//import pages
import Home from "../pages/homepage/Home";
import ErrorPage from "../pages/errorpage";
// import ProductProvider from "../contexts/ProductContext";

//import nav
import Nav from "./Nav";

//import fallbackloading for suspense
import Fallbackloading from "./Fallbackloading";

//import routes and route
import { Route, Routes } from "react-router-dom";

//code splitting by using lazy and suspense from react
const AllProductSearch = lazy(() =>
  import("../components/searchpage/AllSearchProductInfos")
);
const AllFavorite = lazy(() => import("../pages/favoritepage/FavoriteMain"))

const YourCartContext = lazy(() => import("../contexts/YourCartContext"));
const HatProducts = lazy(() => import("../pages/hatproductpage/HatProducts"));

const ClothingProducts = lazy(() =>
  import("../pages/clothingproductpage/ClothingProducts")
);

const ShoeProducts = lazy(() =>
  import("../pages/shoeproductpage/ShoeProducts")
);

const BagProducts = lazy(() => import("../pages/bagproductpage/BagProducts"));

const AccessoriesProducts = lazy(() =>
  import("../pages/accessories/AccessoriesProductsMain")
);

const FeatureProducts = lazy(() =>
  import("../pages/featureproductpage/FeatureProducts")
);
const OffProducts = lazy(() => import("../pages/offproductpage/OffProducts"));
const AboutUs = lazy(() => import("../pages/aboutuspage/AboutUs"));
const ContactUs = lazy(() => import("../pages/contactuspage/ContactUsMain"))



//Access
import Login from "./Login";
import Register from "./Register";

const Router = () => {
  return (
    <>
      <Nav />
      <Suspense fallback={<Fallbackloading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allproductsearch/:id" element={<AllProductSearch />} />
          <Route path="/allfavorite" element={<AllFavorite/>}/>
          <Route path="/hatproducts" element={<HatProducts />} />

          {/* Hats pages brands*/}

          <Route path="/clothingproducts" element={<ClothingProducts />} />

          <Route path="/yourcart" element={<YourCartContext />} />

          {/* Clothes pages brands*/}

          <Route path="/shoeproducts" element={<ShoeProducts />} />

          {/* Shoes pages brands*/}

          <Route path="/bagproducts" element={<BagProducts />} />



          <Route
            path="/accessoriesproducts"
            element={<AccessoriesProducts />}
          />
          {/* Accessories pages brands*/}

        
          <Route path="/featureproducts" element={<FeatureProducts />} />
          <Route path="/offproducts" element={<OffProducts />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs/>}/>
          <Route path="*" element={<ErrorPage />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default Router;

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

//instead of using browser router
//import hash router from react router dom and wrap the app
import { HashRouter } from "react-router-dom";

//import product provider and wrap app in order for children to access data within it
import ProductProvider from "./contexts/ProductContext.jsx";

//import cart provider and wrap product provider in order fot the cart to access all products
import CartProvider from "./contexts/CartContext.jsx";
import ProductDescriptionProvider from "./contexts/ProductDescriptionContext.jsx";

//import favoriteprovider
import FavoriteProvider from "./contexts/FavoriteContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <FavoriteProvider>
      <CartProvider>
        <ProductProvider>
          <ProductDescriptionProvider>
            <React.StrictMode>
              <App />
            </React.StrictMode>
          </ProductDescriptionProvider>
        </ProductProvider>
      </CartProvider>
    </FavoriteProvider>
  </HashRouter>
);

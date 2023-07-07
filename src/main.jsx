import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

//import router
import { BrowserRouter as Router } from "react-router-dom";

//import product provider
import ProductProvider from "./contexts/ProductContext.jsx";

//import cart provider
import CartProvider from "./contexts/CartContext.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <CartProvider>
      <ProductProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ProductProvider>
    </CartProvider>
  </Router>
);

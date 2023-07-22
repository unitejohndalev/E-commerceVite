import React, { useContext } from "react";
import { Link } from "react-router-dom";

//import product context to get cloths data
import { ProductContext } from "../../contexts/ProductContext";

//import cart context
import { CartContext } from "../../contexts/CartContext";


//import react icons
import { PiShoppingCartSimpleLight } from "react-icons/pi";

//import footer
import Footer from "../../components/Footer";

const HMProducts = () => {
  //get cloth products from product context
  const { clothProducts } = useContext(ProductContext);

  //get addToCart function from cart context
  const { addToCart } = useContext(CartContext);

  return (
    <div className="parent-container">
      <div className="product-container">
        <div className="mapParent-container">
          {/* map first data */}
          {clothProducts.map((clothproducts) => {
            //destructure product hats data
            const { id, name, price, img, gender } = clothproducts;

            return (
              <div
                key={id}
                className="mapProduct-container h-[310px] md:h-[450px]"
              >
                <div className="relative">
                  <div className="name-container">
                    <p>{name}</p>
                  </div>
                  <Link to={`/allproductsearch/${id}`}>
                    <img
                      src={img}
                      alt=""
                      className="img-style h-[250px] md:h-[390px]"
                    />
                  </Link>
                  <div
                    className="hidden md:flex absolute bottom-2 right-2 text-[1.5rem]
                   md:text-[2rem] cursor-pointer"
                    onClick={() => addToCart(products, products.id)}
                  >
                    <PiShoppingCartSimpleLight />
                  </div>
                </div>
                <div className="gender-container bottom-2">
                  <p className="absolute ml-2 bottom-4">{`$ ${parseFloat(
                    price
                  ).toFixed(2)}`}</p>
                  <p className="p-style">{gender}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HMProducts;

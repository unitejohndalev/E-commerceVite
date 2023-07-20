import React, { useContext, useEffect, useState } from "react";

//import footer
import Footer from "../../components/Footer";


//import product context to get all json data
import { ProductContext } from "../../contexts/ProductContext";

import { Link } from "react-router-dom";
import OffProductsHero from "./OffProductsHero";

const AllOffProducts = () => {


  //call all state in product context
  const { hatProducts, shoeProducts, clothProducts } =
    useContext(ProductContext);

  //filter hat function
  const filterHatProducts = hatProducts.filter((hat) => {
    return hat.offprice;
  });

  //filter shoe function
  const filterShoeProducts = shoeProducts.filter((shoe) => {
    return shoe.offprice;
  });

  //filter cloth function
  const filterClothProduct = clothProducts.filter((cloth) => {
    return cloth.offprice;
  });

  //state for more
  //set state value into conditional statement
  //use JSON.parse to convert it to JSON string
  //use localStorage.getItem to get data from localstorage
  const [more, setMore] = useState(
    JSON.parse(localStorage.getItem("moreoffproducts") || false)
  );

  //to control show more... onClick
  const toggleShow = () => {
    if (more === false) {
      setMore(true);
    } else {
      setMore(false);
    }
  };

  //set localstorage and name it "moreoffproducts"
  useEffect(() => {
    localStorage.setItem("moreoffproducts", JSON.stringify(more));
  }, [more]); //remember every side effect must return a parameter, here in case state more is set, since it's a variable and changing

  return (
    <div className="parent-container ">
      <div className="product-container">
     <OffProductsHero/>
        <div className="mapParent-container ">
          {filterHatProducts.map((filteredproduct) => {
            const { id, name, price, offprice, img, gender } = filteredproduct;
            return (
              <div key={id} className="mapProduct-container">
                <div className="relative">
             
                  <div className="name-container">
                    <p>{name}</p>
                  </div>
                  <Link to={`/allproductsearch/${id}`}>
                    <img src={img} alt="" className="img-style " />
                  </Link>
                </div>

                <div className="price-container">
                  <p className="ml-2">$ {offprice}</p>
                  <p className="line-through text-red-700 mr-2">{`$ ${parseFloat(
                    price
                  ).toFixed(2)}`}</p>
                </div>
                <div className="gender-container ">
                  <p className="p-style">{gender}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mapParent-container lg:mt-0">
          {filterShoeProducts.map((filteredproduct) => {
            const { id, name, price, offprice, img, gender } = filteredproduct;
            return (
              <div key={id} className="mapProduct-container">
                <div className="relative">
             
                  <div className="name-container">
                    <p>{name}</p>
                  </div>
                  <Link to={`/allproductsearch/${id}`}>
                    <img src={img} alt="" className="img-style " />
                  </Link>
                </div>

                <div className="price-container">
                  <p className="ml-2">$ {offprice}</p>
                  <p className="line-through text-red-700 mr-2">{`$ ${parseFloat(
                    price
                  ).toFixed(2)}`}</p>
                </div>
                <div className="gender-container ">
                  <p className="p-style">{gender}</p>
                </div>
              </div>
            );
          })}
        </div>

        {more && (
          <div className="mapParent-container lg:mt-0">
            {filterClothProduct.map((filteredproduct) => {
              const { id, name, price, offprice, img, gender } =
                filteredproduct;
              return (
                <div key={id} className="mapProduct-container h-[290px] lg:h-[450px]">
                  <div className="relative">
              
                    <div className="name-container">
                      <p>{name}</p>
                    </div>
                    <Link to={`/allproductsearch/${id}`}>
                      <img src={img} alt="" className="img-style h-[290px] lg:h-[390px]" />
                    </Link>
                  </div>

                  <div className="price-container">
                    <p className="ml-2">$ {offprice}</p>
                    <p className="line-through text-red-700 mr-2">{`$ ${parseFloat(
                      price
                    ).toFixed(2)}`}</p>
                  </div>
                  <div className="gender-container ">
                    <p className="p-style">{gender}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        {more === false ? (
          <h1
            className="font-medium mt-5 mb-5 cursor-pointer"
            onClick={toggleShow}
          >
            More ....
          </h1>
        ) : (
          <h1
            className="font-medium mt-5 mb-5 cursor-pointer"
            onClick={toggleShow}
          >
            Hide ...
          </h1>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default AllOffProducts;

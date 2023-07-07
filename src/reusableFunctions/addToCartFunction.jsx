import React, { useState } from 'react'
import data from "../data/NikeProducts.json";


const addToCartFunction = () => {
  const { hats } = data;

  const [cart, setCart] = useState([]);

  return (
    <div>
    {
        hats.map((products) => {
          //destructure product hats data
          const { id, name, price, img, gender } = products;
          //add to cart function
          const addToCart = (products, id) => {
            const newItem = { ...products, amount: 1 };
            //check if the item is already in the cart
            const cartItem = cart.find((item) => {
              return item.id === id;
            });

            if (cartItem) {
              const newCart = [...cart].map((item) => {
                if (item.id === id) {
                  return { ...item, amount: cartItem.amount + 1 };
                } else {
                  return item;
                }
              });
              setCart(newCart);
            } else {
              setCart([...cart, newItem]);
            }
            console.log(cart);
          };
        })
    }
    </div>
  )
}

export default addToCartFunction
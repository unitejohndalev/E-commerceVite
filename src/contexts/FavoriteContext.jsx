import React, { createContext, useState } from 'react'

//create context
export const FavoriteContext = createContext()

const FavoriteProvider = ({children}) => {
    //favorite state
    const [favorite, setFavorite] = useState([])

      const addToFavorite = (product, id) => {
        const newItem = { ...product, amount: 1 };
        const favoriteItem = favoriteItem.find((item) => {
          return item.id === id;
        });

        if (favoriteItem) {
          const newCart = [...favoriteItem].map((item) => {
            if (item.id === id) {
              return { ...item, amount: favoriteItem.amount + 1 };
            } else {
              return item;
            }
          });
          setFavorite(newCart);
        } else {
          setFavorite([...favorite, newItem]);
        }
      };

  return (
    <FavoriteContext.Provider>{children}</FavoriteContext.Provider>
  )
}

export default FavoriteProvider;
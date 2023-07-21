/* eslint-disable react/prop-types */
import React, { createContext, useState } from 'react'

//create context
export const FavoriteContext = createContext()

const FavoriteProvider = ({children}) => {
  //favorite state
  const [favorite, setFavorite] = useState([]);

  //add to favorite function
  const addToFavorite = (product, id) => {
    const newItem = { ...product, amount: 1 };
    const favoriteItem = favorite.find((item) => {
      return item.id === id;
    });

    if (favoriteItem) {
      const newFavorite = [...favorite].map((item) => {
        if (item.id === id) {
          return { ...item, amount: favoriteItem.amount + 1 };
        } else {
          return item;
        }
      });
      setFavorite(newFavorite);
    } else {
      setFavorite([...favorite, newItem]);
    }
  };

  //remove from favorites
  const removeFromFavorite = (id) => {
    const newFavorite = favorite.filter((item) => {
      return item.id !== id;
    });
    setFavorite(newFavorite);
  };

  return (
    <FavoriteContext.Provider
      value={{
        favorite,
        addToFavorite,
        removeFromFavorite,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}

export default FavoriteProvider;
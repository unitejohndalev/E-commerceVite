import React, { useContext } from 'react'

import { FavoriteContext } from '../../contexts/FavoriteContext'

//import react icons
import {  IoMdClose } from "react-icons/io";

const FavoriteChild = () => {
    const { favorite, removeFromFavorite } = useContext(FavoriteContext);
  return (
    <div>
    <div>
        {favorite.map((product) => {
            const {id, name, img, price, gender} = product
            return (
                <div key={id}>
                    <div>
                        <p>{name}</p>
                        <img src={img} alt="" />
                        <p>{price}</p>
                        <p>{gender}</p>
                        <div>
                            <IoMdClose/>
                        </div>
                    </div>
                </div>
            )
        })}
    </div>
    </div>
  )
}

export default FavoriteChild
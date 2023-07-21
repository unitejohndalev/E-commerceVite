import React, { useContext } from 'react'

import { FavoriteContext } from '../../contexts/FavoriteContext'


import { FaHeart } from "react-icons/fa";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { Link, useNavigate } from 'react-router-dom';
const FavoriteChild = () => {
  const { favorite, removeFromFavorite } = useContext(FavoriteContext);

  //navigate hook
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="parent-container">
      <div className='fixed'>
        <button
          className="hidden md:flex absolute 
          ml-2 text-[1.5rem] px-[10px] cursor-pointer"
          onClick={goBack}
        >
          <HiOutlineArrowLeft />
        </button>
        <div
          onClick={goBack}
          className="absolute  ml-2 text-[1.5rem] md:hidden
          "
        >
          <HiOutlineArrowLeft />
        </div>
      </div>
      <div className="product-container">
        <div className="mapParent-container mt-10">
          {favorite.map((product) => {
            const { id, name, img, price, gender } = product;
            return (
              <div key={id} className="mapProduct-container">
                <div className="relative">
                  <div className="name-container">
                    <p>{name}</p>
                  </div>

                  <div
                    className="absolute top-8 left-2 text-red-800  text-[1.1rem] md:text-[1.5rem] cursor-pointer"
                    onClick={() => removeFromFavorite(id)}
                  >
                    <FaHeart />
                  </div>
                  <Link to={`/allproductsearch/${id}`}>
                    <img src={img} alt="" className="img-style" />
                  </Link>
                </div>
                <div className="price-container">
                  <p className=" ml-2">{`$ ${parseFloat(price).toFixed(2)}`}</p>
                </div>
                <div className="gender-container">
                  <p className="p-style">{gender}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FavoriteChild
import React from 'react'
import Hat from '../components/Hat'

const CartProducts = () => {
    const addToCart = () => {
        console.log('added to cart')
    }
  return (
    <div>
        <Hat addToCart = {addToCart}/>
    </div>
  )
}

export default CartProducts
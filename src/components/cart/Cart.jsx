import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteFromCart } from '../../redux/action/index'
import { Link } from 'react-router-dom'
import './Cart.scss'

function Cart(props) {
  const state = useSelector((state) => state.CartHandler)
  const dispatch = useDispatch()
  const deleteHandler = (item) => {
    dispatch(DeleteFromCart(item))
  }
  const cartItems = (cartItem) => {
    return (
      <div className="cart-col" key={cartItem.id}>
        <div className="cart-col_top">
          <button onClick={() => deleteHandler(cartItem)}>X</button>
        </div>
        <div className="cart-col_middle">
          <div className="cart-col_left">
            <img src={cartItem.images} alt={cartItem.title} />
          </div>
          <div className="cart-col_right">
            <h2>{cartItem.title}</h2>
            <span>${cartItem.price}</span>
          </div>
        </div>
      </div>
    )
  }

  const emptyCart = () => {
    return (
      <div className="cart-col">
        <h1>Your Cart is Empty ...</h1>
      </div>
    )
  }

  const buttonCheckOut = () => {
    return (
      <div className="cart-checkout">
        <Link to="/checkout">Proceed to checkout</Link>
      </div>
    )
  }
  return (
    <>
      <div className="cart">
        <div className="cart-container">
          <div className="cart-row">
            {state.length === 0 && emptyCart()}
            {state.length !== 0 && state.map(cartItems)}
            {state.length !== 0 && buttonCheckOut()}
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart

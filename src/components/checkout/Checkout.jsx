import React from 'react'
import './Checkout.scss'
import { useSelector } from 'react-redux'

function Checkout(props) {
  const state = useSelector((state) => state.CartHandler)

  var total = 0
  const listItems = (item) => {
    total += item.price
    return (
      <div className="checkout-col_totalContent">
        <p>{item.title}</p>
        <span>${item.price}</span>
      </div>
    )
  }
  return (
    <div className="checkout-container">
      <div className="checkout-row">
        <div className="checkout-col">
          <div className="checkout-col_form">
            <div className="checkout-col_input">
              <label htmlFor="name">Name :</label>
              <input type="text" id="name" required />
            </div>

            <div className="checkout-col_input">
              <label htmlFor="address">Address :</label>
              <input type="text" id="address" required />
            </div>
            <div className="checkout-col_input">
              <label htmlFor="email">Email :</label>
              <input type="text" id="email" required />
            </div>
            <div className="checkout-col_input">
              <label htmlFor="phone">Phone :</label>
              <input type="text" id="phone" required />
            </div>
          </div>

          <button>Checkout</button>
        </div>

        <div className="checkout-col">
          <h2>
            Your Cart is <span>{state.length}</span>
          </h2>
          <div className="checkout-col_totalInfo">
            {state.map(listItems)}
            <div className="checkout-col_total">
              <p>Total</p>
              <span>${total}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout

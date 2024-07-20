import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../src/context/StoreContext'
const PlaceOrder = () => {
  const {getTotalCartAmount} = useContext(StoreContext);
  return (
    <div className='place-order'>
      <div className="place-order-left">
        <p className='title'>Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name' />

        </div>

        <input type="email" placeholder='Email address' />
        <input type="text" placeholder='Street' />

        <div className="multi-fields">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />

        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Zip code' />
          <input type="text" placeholder='Country' />

        </div>
        <input type="phonenumber" placeholder='Phone' />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>
            Cart Total
          </h2>
          <div>
            <div className="cart-total-details">
              <p>Sub Total</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <div className="cart-total-details">
              <p>
                Delivery Fee
              </p>
              <p>${getTotalCartAmount() === 0 ? 0 : 5}</p>
            </div>
            <div className="cart-total-details">
              <strong>Total</strong>
              <strong>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 5}</strong>
            </div>
          </div>
          <button>Proceed to Payment</button>
        </div>
  

      </div>
    </div>
  )
}

export default PlaceOrder
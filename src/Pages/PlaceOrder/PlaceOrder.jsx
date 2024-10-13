import React, { useContext } from 'react'
import "./PlaceOrder.css"
import { StoreContext } from '../../Context/StoreContext'

const PlaceOrder = () => {
  const {getTotalAmount} =useContext(StoreContext);
  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
         <div className="multi-fields">
          <input type="text" placeholder='First name'/>
          <input type="text" placeholder='Last name'/>
         </div>
         <input type="text" placeholder='Email address' />
         <input type="text" placeholder='Street' />
         <div className="multi-fields">
          <input type="text" placeholder='City'/>
          <input type="text" placeholder='State'/>
         </div>
         <div className="multi-fields">
          <input type="text" placeholder='postal code'/>
          <input type="text" placeholder='Country'/>
         </div>
         <input type="text" placeholder='phone' />
      </div>
      <div className="place-order-right">
      <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p className="p">Subtotal</p>
              <p className="p">${getTotalAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p className="p"> Delivery Fee</p>
              <p className="p">${getTotalAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalAmount()===0?0:getTotalAmount()+2}</b>
            </div>
          </div>
          <button onClick={()=>navigate('/Order')}>PROCEED TO CHECKOUT</button>
        </div>

      </div>

    </form>
  )
}

export default PlaceOrder
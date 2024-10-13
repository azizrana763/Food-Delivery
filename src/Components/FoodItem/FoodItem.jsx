import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'

const FoodItem = ({ id, name, price, description, image }) => {

    const {cartItems,removeFromCart,AddToCart}=useContext(StoreContext);
    return (
        <div className="FoodItem">
            <div className="FoodItem-img-container">
                <img className="FoodItem-image" src={image}></img>
                {!cartItems[id]
                    ? <img className="add" onClick={() => AddToCart(id)} src={assets.add_icon_white}></img>
                    : <div className="fooditem-counter">
                        <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red}></img>
                        <p>{cartItems[id]}</p>
                        <img onClick={()=>AddToCart(id)} src={assets.add_icon_green}></img>

                    </div>

                }
            </div>
            <div className="FoodItem-info">
                <div className="FoodItem-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts}></img>
                </div>
                <p className="FoodItem-desc">
                    {description}
                </p>
                <p className="FoodItem-price">
                    ${price}
                </p>
            </div>
        </div>
    )
}

export default FoodItem
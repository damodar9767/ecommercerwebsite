import React from 'react'
import './CartItems.css'
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => {
    const {gerRotalcartAmount,all_product,cartItems,removeFromCart} = useContext(ShopContext)
  return (
    <div className="cartitems">
        <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>


        </div>
        <hr />
        {all_product.map((e)=>{
            if(cartItems[e.id] > 0){
                return<div key={e.id}>
                <div className="cartitems-format cartitems-format-main ">
                    <img src={e.image} className='carticon-product-icon' alt="" />
                    <p>{e.name}</p>
                    <p>${e.new_price}</p>
                    <button className='cartitems-quatity'>{cartItems[e.id]}</button>
                    <p >${e.new_price * cartItems[e.id]}</p>
                    <img src={remove_icon} className='cartitems-remove-icon' alt="" onClick={() =>{
                        removeFromCart(e.id)
                    }} />
                </div>
                <hr />
            </div>
            }
            return null
        })}
        <div className="cartitems-down">
            <div className="cartitems-toal">
                <h1>Cart Totals</h1>
                <div>
                    <div className="cartitems-total-item">
                        <p>Subtotal</p>
                        <p>${gerRotalcartAmount()}</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <p>Shipping fee</p>
                        <p>free</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <h3>Total</h3>
                        <h3>${gerRotalcartAmount()}</h3>
                    </div>
                </div>
                <button>PROCEED TO CHECKOUT</button>
            </div>
            <div className="cartitemss-promocode">
                <p>Enter Promo code</p>
                <div className="cartitems-promobox">
                    <input type="text"  placeholder='promo'/>
                    <button>Submit</button>
                </div>
            </div>


        </div>
    </div>
  )
}

export default CartItems
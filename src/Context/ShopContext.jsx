import React , { createContext, useState } from 'react';

import all_product from '../Components/Assets/all_product'

export const ShopContext = createContext(null);

const getDefaultCart =() =>{
    let cart = {}
    for(let index= 0; index < all_product.length+1; index++){
        cart[index] = 0;
    }
    return cart
}


const ShopContextProvider = (props) =>{
    const [cartItems, setCartItems] = useState(getDefaultCart());
    
    console.log(cartItems);
    const addToCart = (itemId) =>{
        setCartItems((prev) => ({...prev,[itemId]:prev[itemId]+1}))

    }

    const removeFromCart = (itemId) =>{
        setCartItems((prev) => ({...prev,[itemId]:prev[itemId]-1}))

    }
    const gerRotalcartAmount =() =>{
        let totalAmount=0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo = all_product.find((produt)=> produt.id === Number(item))
                totalAmount+=itemInfo.new_price * cartItems[item]
            }
            return totalAmount;
        }
    }

    const getTtalcartitems =() =>{
        let toitem =0
        for(const item in cartItems){
            if(cartItems[item]>0){
                toitem += cartItems[item]
            }
        }
        return toitem
    }
    const contextValue = {getTtalcartitems,gerRotalcartAmount,all_product,cartItems,addToCart,removeFromCart}
   

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
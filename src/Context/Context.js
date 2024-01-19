import {React, createContext, useState } from 'react';

//import list from '../Shop/List'

  export const ShopContext = createContext(null);


 export function ShopContextProvider (props){

 // console.log("uuu")
const[cartItems,setCartItems]=useState([
  {
    id: 0,
    productName: "IPhone",
    price: 999.0,
    productImage: "https://raw.githubusercontent.com/machadop1407/shopping-cart-react/main/src/assets/products/1.png",
    count:0
  },

  {
    id: 1,
    productName: "IPhone",
    price: 999.0,
    productImage: "https://raw.githubusercontent.com/machadop1407/shopping-cart-react/main/src/assets/products/1.png",
    count:0
  },
  {
    
      id: 2,
      productName: "Cannon M50 Camera",
      price: 1999.0,
      productImage: "https://raw.githubusercontent.com/machadop1407/shopping-cart-react/main/src/assets/products/3.png",
    
       count:0
  },
  {
    id: 3,
    productName: "Macbook Pro 2022 (M1)",
    price: 1999.0,
    productImage: "https://github.com/machadop1407/shopping-cart-react/blob/main/src/assets/products/2.png?raw=true",
    count:0
  }
]);

   
    
   
   const addToCart = (itemId) => {
 console.log(itemId)
    setCartItems((prev)=>[...prev,prev[itemId].count = prev[itemId].count+1])

  
  }

  const removeFromCart = (itemId) => {
    console.log(itemId)
       setCartItems((prev)=>[...prev,prev[itemId].count = prev[itemId].count-1])
   
     
     }

  console.log(cartItems," fff ")

   const contextValue = {
    addToCart,cartItems,removeFromCart
}



//console.log("no click")


    return (
        <ShopContext.Provider value={contextValue}><>{props.children}
       
        
        </></ShopContext.Provider>
    );

 }











   //cartItems.push(y)
 //  console.log(cartItems)

   //setCartItems((prevFriends) => ({
   // ...prevFriends,
   // y
   //}));
   // setCartItems((prev) => ({ ...prev, y}));

   // console.log(cartItems.length)



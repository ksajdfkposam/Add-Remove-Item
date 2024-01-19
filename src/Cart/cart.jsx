import { React, useContext } from 'react';
import { ShopContext } from '../Context/Context'
import './cart.css'

function Cart() {
    const { cartItems,addToCart,removeFromCart } = useContext(ShopContext);

    return (
        <div className="cart">
            <div>
                <h1>Your Cart Items</h1>
            </div>
            <div className="cart">
                { cartItems.map((ele, index) => {
                        return (
<div key={index}>
                         {ele.count>0 && <div className="cartItem" >
                             <img src={ele.productImage} alt={ele.productName} />
                               <div className="description">
                                  <p>
                                     <b>{ele.productName}</b>
                                    </p>
                                    <p> Price: {ele.price}</p>
                                    <p> Count: {ele.count}</p>
                                    <div className="countHandler">
                                        <button className='btnEffect' onClick={()=>removeFromCart(ele.id)}> - </button>

                                        <button className='btnEffect' onClick={()=>addToCart(ele.id)}> + </button>
                                    </div>
                                </div>
                            </div>}
                        
</div>




                        )
                    })




                }


















            </div>
        </div>
    );
}

export default Cart; 
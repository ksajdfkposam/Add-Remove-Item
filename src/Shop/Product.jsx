import { React, useContext } from 'react';

import { ShopContext } from '../Context/Context'

function Product(props) {
    //console.log(props.data,"props")
    const { id, productName, productImage, price } = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);
    //console.log(cartItems,"df")
   

    const k = cartItems[id];

  //  console.log( "id_sub")



    return (
        <>
            <div className="product" >

                <img src={productImage} alt={productName} />
                <div className="description">
                    <p>
                        <b>{productName}</b>
                    </p>
                    <p> ${price}</p>
                </div>
                <button className="addToCartBttn" onClick={() => addToCart(id)} >
                 
                    Add to Cart {k && k.count > 0 && <> ({k.count})</>}
                </button>
            </div>

        </>
    );
}

export default Product;
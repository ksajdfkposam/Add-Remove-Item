import {React} from 'react';
import list from './List';
import './shop.css'
import Product from './Product';




function Shop() {
  
 
    
    return (
        
        <div className="shop">
          
            <div className="shopTitle">
                <h1>PedroTech Shop</h1>
            </div>

            <div className="products">
                {


    list.map((product,id)=>{

        return(
            
            <Product data={product} key={id}/>
          
        )

    })


                


                }

            </div>
           
        </div>

    );
}

export default Shop;
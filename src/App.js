import { BrowserRouter as Router , Routes,Route} from 'react-router-dom';
import './App.css';
import Navbar from "./Navbar/nav"
import Shop from './Shop/shop'
import Cart from './Cart/cart'
import { ShopContextProvider } from './Context/Context';

function App() {
  return (
    <>
     <ShopContextProvider>
    <Router>
<Navbar/>
      <Routes>
<Route exact path="/" element={<Shop />}/>
<Route exact path="/Cart" element={<Cart />}/>

      </Routes>
     
    </Router>
    </ShopContextProvider>
    </>
  );
}

export default App;

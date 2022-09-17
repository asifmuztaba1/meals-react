import Header from "./layouts/header/Header";
import {useState} from "react";
import Meals from "./layouts/meals/Meals";
import Cart from "./component/Cart/Cart";
import CartProvider from "./provider/CartProvider";

function App() {
    const [showCart, setShowCart] = useState(false);
    const showCartHandler = () => {
        setShowCart(true)
    }
    const hideCartHandler = () => {
        setShowCart(false)
    }
    return (
        <CartProvider>
            {showCart && <Cart onHideCart={hideCartHandler}/>}
            <Header onShowCart={showCartHandler}/>
            <Meals/>
        </CartProvider>
    );
}

export default App;

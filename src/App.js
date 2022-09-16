import Header from "./layouts/header/Header";
import {Fragment, useState} from "react";
import Meals from "./layouts/meals/Meals";
import Cart from "./component/Cart/Cart";

function App() {
    const [showCart, setShowCart] = useState(false);
    const showCartHandler = () => {
        setShowCart(true)
    }
    const hideCartHandler = () => {
        setShowCart(false)
    }
    return (
        <Fragment>
            {showCart && <Cart onHideCart={hideCartHandler}/>}
            <Header onShowCart={showCartHandler}/>
            <Meals/>
        </Fragment>
    );
}

export default App;

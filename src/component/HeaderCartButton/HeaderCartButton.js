import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import {useContext} from "react";
import CartContext from "../../store/cart-context";
const HeaderCartButton = props =>{
    const cartCtx = useContext(CartContext);
    const numberOfitem = cartCtx.items.reduce((carNumber, item)=>{ return carNumber + item.amount},0);
    return <button className={classes.button} onClick={props.onShowCart}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span className={classes.bump}>
            Your Cart Item
        </span>
        <span className={classes.badge}>
            {numberOfitem}
        </span>
    </button>
}

export default HeaderCartButton;

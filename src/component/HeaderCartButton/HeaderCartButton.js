import CartIcon from "../CartIcon/CartIcon";
import classes from "./HeaderCartButton.module.css";
const HeaderCartButton = props =>{
    return <button className={classes.button}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span className={classes.bump}>
            Your Cart Item
        </span>
        <span className={classes.badge}>
            3
        </span>
    </button>
}

export default HeaderCartButton;

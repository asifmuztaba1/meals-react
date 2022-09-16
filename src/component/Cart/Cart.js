import classes from "./Cart.module.css";
import Modal from "../../layouts/Modal/Modal";

const Cart = props => {
    const cartItems = (
        <ul className={classes['cart-items']}>
            {
                [{id: 1, name:'Sushi', amount: '2', price: 35.6}].map((item) => <li>
                    {item.name}
                </li>)
            }
        </ul>
    )
    return (
        <Modal onHideCart={props.onHideCart}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>36.5</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
}
export default Cart

import classes from "./MealsItem.module.css";
import Form from "../../../layouts/formElements/Form";
import {useContext} from "react";
import CartContext from "../../../store/cart-context";
const MealsItem = props => {
    const cartCtx = useContext(CartContext)
    const price = `$${props.meal.price}`;
    const addToCartHandler = amount =>{
        cartCtx.addItem({
            id: props.id,
            name: props.meal.name,
            amount: amount,
            price: props.meal.price
        })
    }
    return (
        <li className={classes.meal}>
            <div >
                <h3>{props.meal.name}</h3>
                <div className={classes.description}>{props.meal.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <Form id={props.id} onAddToCart={addToCartHandler}/>
            </div>
        </li>
    );
}
export default MealsItem;

import classes from "./MealsItem.module.css";
import Form from "../../../layouts/formElements/Form";
const MealsItem = props => {
    const price = `$${props.meal.price}`;
    return (
        <li className={classes.meal}>
            <div >
                <h3>{props.meal.name}</h3>
                <div className={classes.description}>{props.meal.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <Form/>
            </div>
        </li>
    );
}
export default MealsItem;

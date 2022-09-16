import classes from "./MealsItem.module.css";
const MealsItem = props => {
    const price = `$${props.meal.price}`;
    return (
        <li>
            <div className={classes.meal}>
                <h3>{props.meal.name}</h3>
                <div className={classes.description}>{props.meal.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
        </li>
    );
}
export default MealsItem;

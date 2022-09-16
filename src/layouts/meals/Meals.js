import {Fragment} from "react";
import MealsSummery from "../../component/Meals/MealsSummery";
import AvailableMeals from "../../component/Meals/AvailableMeals";

const Meals = () => {
    return(
        <Fragment>
            <MealsSummery/>
            <AvailableMeals/>
        </Fragment>
    );
}
export default Meals;

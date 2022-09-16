import {Fragment} from "react";
import classes from "./Header.module.css";
import img from "../../assets/meals.jpg";
import HeaderCartButton from "../../component/HeaderCartButton/HeaderCartButton";
const Header = (props) => {
    return <Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton/>
        </header>
        <div className={classes['main-image']}>
            <img src={img} alt="A meal Image"/>
        </div>
    </Fragment>
}

export default Header;

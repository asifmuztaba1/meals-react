import Header from "./layouts/header/Header";
import {Fragment} from "react";
import Meals from "./layouts/meals/Meals";

function App() {
    return (
        <Fragment>
            <Header/>
            <Meals/>
        </Fragment>
    );
}

export default App;

import {useRef, useState} from "react";
import classes from "./Form.module.css";
import Input from "./Input";
const Form = props => {
    const amountInputRef = useRef()
    const [isAmountValid, setIsAmountValid] = useState(true)
    const formSubmitHandler = (event) =>{
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;
        if (enteredAmountNumber<0 || enteredAmountNumber > 5 || enteredAmountNumber === ''){
            setIsAmountValid(false)
            return
        }
        props.onAddToCart(enteredAmountNumber)
    }
    return (
        <form className={classes.form} onSubmit={formSubmitHandler}>
            <Input label="Amount" input={
                {
                    ref: amountInputRef,
                    id: 'amount_' + props.id,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1'
                }
            }/>
            <button>+ Add</button>
            {isAmountValid && <p>The Amount is InValid</p>}
        </form>
    );
}
export default Form;

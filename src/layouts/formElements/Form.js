import classes from "./Form.module.css";
import Input from "./Input";
const Form = props => {
    return (
        <form className={classes.form}>
            <Input label="Amount" input={
                {
                    id: 'amount',
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1'
                }
            }/>
            <button>+ Add</button>
        </form>
    );
}
export default Form;

import { useRef } from "react";
import styles from "./ExpenseForm.module.css";

const ExpenseForm = (props) => {
  const expenseTextInput = useRef();
  const expenseAmountInput = useRef();

  const onSubmitHandler = (e) => {
    e.preventDefault();
   

    const enteredText = expenseTextInput.current.value;
    const enteredAmount  = parseFloat(expenseAmountInput.current.value);
    console.log('id', new Date().getTime());
    const newexpense = {
      id: new Date().getTime(),
      text : enteredText,
      amount : enteredAmount
    }
    console.log('newexpense', newexpense);
    props.addExpense(newexpense);
    expenseTextInput.current.value = "";
    expenseAmountInput.current.value = "";
  };

  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <h3>Add new transaction</h3>
      <label htmlFor="expenseText">Text</label>
      <input
        id="expenseText"
        className={styles.input}
        type="text"
        placeholder="Enter text..."
        required
        ref={expenseTextInput}
      />
      <div>
        <label htmlFor="expenseAmount">Amount</label>
        <div>(negative - expense,positive-income)</div>
      </div>
      <input
        className={styles.input}
        id="expenseAmount"
        type="number"
        placeholder="Enter amount..."
        required
        ref={expenseAmountInput}
      />
      <button className={styles.submitBtn}>Add Transaction</button>
    </form>
  );
};

export default ExpenseForm;

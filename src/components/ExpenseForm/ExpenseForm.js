import { useEffect, useRef } from "react";
import styles from "./ExpenseForm.module.css";

const ExpenseForm = ({addExpense, updateExpense, editExpenses}) => {
  const expenseTextInput = useRef();
  const expenseAmountInput = useRef();


  useEffect(() => {
    if(editExpenses){
      expenseTextInput.current.value = editExpenses.text;

      expenseAmountInput.current.value =  editExpenses.amount;
    }
  }, [editExpenses])

  const onSubmitHandler = (e) => {
    e.preventDefault();
   

    const enteredText = expenseTextInput.current.value;
    const enteredAmount  = parseFloat(expenseAmountInput.current.value);
    // console.log('id', new Date().getTime());
   
    const newexpense = {
      id:  editExpenses ? editExpenses.id : new Date().getTime(),
      text : enteredText,
      amount : enteredAmount
    }
    // console.log('newexpense', newexpense);
    if(editExpenses){
      updateExpense(newexpense);
    }else{
      addExpense(newexpense);
    }
   
    expenseTextInput.current.value = "";
    expenseAmountInput.current.value = "";
  };

  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <h3>{editExpenses ? "edit new transaction" : "Add new transaction"}</h3>
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
      <button className={styles.submitBtn}>{editExpenses ? "edit transaction" : "Add Transaction"}</button>
    </form>
  );
};

export default ExpenseForm;

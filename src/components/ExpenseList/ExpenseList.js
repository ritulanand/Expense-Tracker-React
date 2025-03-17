import React from "react";
import styles from "./ExpenseList.module.css";
import Transaction from "../Transaction/Transaction";

const ExpenseList = ({editExpense, deleteExpense, expenses}) => {
  return (
    <div className={styles.expenseListContainer}>
      <h3>Transactions</h3>
      <ul className={styles.transactionList}>
        
        {expenses.map((expense,i) => {
          return (
            <Transaction key={expense.id} expense={expense} index={i} deleteExpense={deleteExpense} editExpense={editExpense}  />
          )
        } )}
      </ul>
    </div>
  );
};

export default ExpenseList;

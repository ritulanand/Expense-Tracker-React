import { useState , useReducer} from "react";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo";
import ExpenseList from "./components/ExpenseList/ExpenseList";
import "./App.css";


const expensereducer = (state, action) => {
  console.log("acction edit", action);
  console.log("syate edit", state);
  switch(action.type){
    case "ADD_EXPENSE" : 
      return [action.expense, ...state]

    case "EDIT_EXPENSE" : 
      return state.map(exp => exp.id === action.expense.id ? action.expense : exp);
    case "REMOVE_EXPENSE" : 
      return state.filter((expense) => expense.id !== action.ids)
  }
}

function App() {
  // const [expenses, setExpenses] = useState([]);
  const [state, dispatch] = useReducer(expensereducer, []);

  const [editExpenses, setEditExpenses] = useState(null);
  
  const addExpense = (newexpense) => {
    // setEditExpenses([...expenses, newexpense]);
    dispatch({ type: "ADD_EXPENSE",  expense : newexpense } );

  }

 
  const deleteExpense = (id) => {
    // setExpenses(expenses.filter((expense) => expense.id !== id ));
    dispatch({ type: "REMOVE_EXPENSE", ids : id });
  }

  const updateExpense = (updatedExpense) => {
    console.log("update expense", updatedExpense);
    dispatch({type : "EDIT_EXPENSE",  expense : updatedExpense});
    setEditExpenses(null);

  }

  const editExpense = (newexpense) => {
    setEditExpenses(newexpense);
  }
  console.log("state", state);

  return (
    <>
      <h2 className="mainHeading">Expense Tracker</h2>
      <div className="App"> 

        
        <ExpenseForm  addExpense={addExpense} updateExpense={updateExpense} editExpenses={editExpenses} />
        <div className="expenseContainer">
          <ExpenseInfo expenses={state} />
          <ExpenseList expenses={state} deleteExpense={deleteExpense} editExpense={editExpense} />
        </div>
      </div>
    </>
  );
}

export default App;

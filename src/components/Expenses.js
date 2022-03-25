import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

export default function Expenses(props) {
    let expenseItemObj = {
        expenseDate: props.expense.expenseDate,
        expenseTitle: props.expense.expenseTitle,
        expenseAmount: props.expense.expenseAmount
    }

    return (
        <div className="expenses">
            <ExpenseItem expenseItem={expenseItemObj} />
        </div>
    );
}
import './ExpenseDate.css'

export default function ExpenseDate(props) {
    let month = props.expenseDate.toLocaleString('en-US', { month: 'long' });
    let day = props.expenseDate.toLocaleString('en-US', { day: '2-digit' });
    let year = props.expenseDate.getFullYear();

    return (
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__day">{day}</div>
        </div>
    );
}
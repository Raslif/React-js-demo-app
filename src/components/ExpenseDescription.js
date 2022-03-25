export default function ExpenseDescription(props) {
    return (
        <div className={props.className}>
            {props.children}
        </div>
    );
}
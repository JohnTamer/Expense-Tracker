import ExpenseDate from "../date/expenseDate";
import "./expenseItem.css";
import Card from "./../card/card";

const ExpenseItem = (props) => {
  // const [title, setTitle] = useState(props.title);
  // const clickHandler = () => {
  //   setTitle("updated");
  // };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button>change title</button>
    </Card>
  );
};
export default ExpenseItem;

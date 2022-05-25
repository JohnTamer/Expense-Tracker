// import "./expenseItem.css";
// import { useState } from "react";
// const ExpenseItem = (props) => {
//
//   const [title, setTitle] = useState(props.title);
//   const clickHandler = () => {
//     setTitle("updated!");
//   };
//   return (
//     <div className="expense-item">
//       <div className="expense-date">
//         <div className="expense-date__month">{month}</div>
//         <div className="expense-date__year">{day}</div>
//         <div className="expense-date__day">{year}</div>
//       </div>
//       <div className="expense-item__description">
//         <h2>{title}</h2>
//         <div className="expense-item__price">${props.amount}</div>
//         <button onClick={clickHandler}>change title</button>
//       </div>
//     </div>
//   );
// };
// export default ExpenseItem;
import ExpenseDate from "../date/expenseDate";
import "./expenseItem.css";
import Card from "./../card/card";
import { useState } from "react";
const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle("updated");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>change title</button>
    </Card>
  );
};
export default ExpenseItem;

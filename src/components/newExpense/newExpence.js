import ExpenseForm from "../expenceForm/expenceForm";
import "./newExpence.css";

const NewExpence = (props) => {
  const saveHandler = (enteredExpenseData) => {
    const vexpenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(vexpenseData);
    props.onTransfer(vexpenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveHandler}></ExpenseForm>
    </div>
  );
};
export default NewExpence;

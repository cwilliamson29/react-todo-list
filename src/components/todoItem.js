function ToDoItem(props) {
  return (
    <div>
      <input
        type="checkbox"
        id={props.id}
        name={props.id}
        checked={props.checked}
        onChange={() => props.handleChange(props.id)}
      />
      <label htmlFor={props.id}> {props.label}</label>
    </div>
  );
}

export default ToDoItem;

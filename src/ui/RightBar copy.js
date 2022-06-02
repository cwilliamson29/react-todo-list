import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import styles from "./RightBar.module.css";

function RightBarCopy(book) {
  const newDate = format(new Date(), "MM/dd/yyyy 'at' kk:mm a");
  const saveditems = JSON.parse(localStorage.getItem("todos"));
  const [todos, setTodos] = useState(saveditems || []);

  useEffect(() => {
    const json = JSON.stringify(todos);
    localStorage.setItem("todos", json);
  }, [todos]);

  useEffect(() => {
    const json = localStorage.getItem("todos");
    const savedTodos = JSON.parse(json);
    if (savedTodos) {
      setTodos(savedTodos);
    }
  }, []);

  const addTodo = (e) => {
    let tempID;
    e.preventDefault();

    let A = todos.length;
    if (A === 0) {
      tempID = 1;
    } else {
      tempID = todos[--A].id;
      tempID++;
    }

    const newTodo = {
      id: tempID,
      todo: e.target.input.value,
      date: newDate,
      status: true,
    };
    setTodos([...todos, newTodo]);
    e.target.input.value = "";
  };

  const deleteToDo = (idToDelete) => {
    const filteredNotes = todos.filter((todo) => todo.id !== idToDelete);
    setTodos(filteredNotes);
  };

  return (
    <div className={styles.RightBar}>
      <h1>Hello World!</h1>
      <form onSubmit={addTodo}>
        <input type="text" name="input" />
        <button type="submit">Add ToDo</button>
      </form>

      <h2>List of Todos</h2>
      {todos.map(({ id, todo, date, status }) => (
        <div key={id} className="todo__list">
          <h3>{todo}</h3>
          <p>
            <i>
              {date} - id {id}
            </i>
          </p>
          <button onClick={() => deleteToDo(id)}> Delete </button>
        </div>
      ))}
    </div>
  );
}
//https://www.code-boost.com/react-local-storage/

export default RightBarCopy;

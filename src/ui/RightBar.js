import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import styles from "./RightBar.module.css";

function RightBar(id) {
  const newDate = format(new Date(), "MM/dd/yyyy 'at' kk:mm a");
  const saveditems = JSON.parse(localStorage.getItem("books"));
  const [books, setBooks] = useState(saveditems || []);

  //console.log(id.id);
  //console.log(books[id.id].todos);

  return (
    <div className={styles.RightBar}>
      <h1>Hello World!</h1>
      <form onSubmit="submit">
        <input type="text" name="input" />
        <button type="submit">Add ToDo</button>
      </form>

      <h2>List of Todos</h2>
      {books[id.id].todos.map(({ id, todo, date, status }) => (
        <div key={id} className="todo__list">
          <h3>{todo}</h3>
          <p>
            <i>
              {date} - id {id}
            </i>
          </p>
        </div>
      ))}
    </div>
  );
}

export default RightBar;

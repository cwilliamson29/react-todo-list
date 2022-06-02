import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import styles from "./LeftBar.module.css";
import RightBar from "./RightBar";

function LeftBar() {
  const newDate = format(new Date(), "MM/dd/yyyy 'at' kk:mm a");
  const mockBook = [
    {
      name: "Book1",
      id: 1,
      date: newDate,
      todos: [
        {
          id: 1,
          todo: "test value 1",
          date: newDate,
          status: true,
        },
        {
          id: 2,
          todo: "test value 2",
          date: newDate,
          status: true,
        },
        {
          id: 3,
          todo: "test value 3",
          date: newDate,
          status: true,
        },
      ],
    },
    {
      name: "Book2",
      id: 2,
      date: newDate,
      todos: [
        {
          id: 1,
          todo: "test value 1",
          date: newDate,
          status: true,
        },
        {
          id: 2,
          todo: "test value 2",
          date: newDate,
          status: true,
        },
        {
          id: 3,
          todo: "test value 3",
          date: newDate,
          status: true,
        },
      ],
    },
  ];
  const saveditems = JSON.parse(localStorage.getItem("books"));
  const [books, setBooks] = useState(saveditems || []);
  //const [books, setBooks] = useState(mockBook);

  useEffect(() => {
    const json = JSON.stringify(books);
    localStorage.setItem("books", json);
  }, [books]);

  useEffect(() => {
    const json = localStorage.getItem("books");
    const savedBooks = JSON.parse(json);
    if (savedBooks) {
      setBooks(savedBooks);
    }
  }, []);

  const addBook = (e) => {
    let tempID;
    e.preventDefault();

    let A = books.length;
    if (A === 0) {
      tempID = 1;
    } else {
      tempID = books[--A].id;
      tempID++;
    }

    const newBook = {
      id: tempID,
      name: e.target.input.value,
      date: newDate,
      todos: [
        {
          id: 1,
          todo: "test value 1",
          date: newDate,
          status: true,
        },
      ],
    };
    setBooks([...books, newBook]);
    e.target.input.value = "";
  };

  const barLaunch = (id) => {
    console.log("barLuanch");
    <RightBar id={id} />;
  };

  return (
    <div className={styles.main}>
      <div className={styles.leftBar}>
        <h1>Welcome React Todo Lists</h1>
        <form onSubmit={addBook}>
          <input type="text" name="input" />
          <button type="submit">Add ToDo</button>
        </form>

        <h2>List of Notebooks</h2>
        {books.map(({ id, name, date, todos }) => (
          <div>
            <div key={id} className="book__list">
              <h3>
                <button onClick={() => barLaunch(id)}>{name}</button>
              </h3>
              <p>
                <i>
                  {date} - id {id}
                </i>
              </p>
            </div>
          </div>
        ))}
      </div>
      <RightBar id={0} />;<div className={styles.RightBar}></div>
    </div>
  );
}
//<button onClick={() => deleteToDo(id)}> Delete </button>
export default LeftBar;

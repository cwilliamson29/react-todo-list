import React from "react";
import ToDoItem from "./ref/todoItem";
import todosData from "./old-todosData.js";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: todosData,
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(id) {
        this.setState((prevState) => {
            console.log(prevState);
            const data = prevState.todos.map((todo) => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            });
            return {
                todos: data,
            };
        });
    }

    render() {
        const todoItems = this.state.todos.map((item) => ( <
            ToDoItem key = { item.id }
            id = { item.id }
            label = { item.text }
            checked = { item.completed }
            handleChange = { this.handleChange }
            />
        ));

        return <div > { todoItems } < /div>;
    }
}

export default App;
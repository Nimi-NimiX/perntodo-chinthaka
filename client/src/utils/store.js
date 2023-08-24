import { useState } from "react";
import { createContainer } from "unstated-next";

function useStore() {
    /**
     * Initial state of the todo list
     * Set actions to be performed on the todo list
     */
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos([...todos, todo]);
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.todo_id !== id));
    };

    const updateTodo = ({ id, description }) => {
        const newTodos = todos.map((todo) => {
            if (todo.todo_id === id) {
                todo.description = description;
            }
            return todo;
        });
        setTodos(newTodos);
    };

    return { todos, addTodo, setTodos, deleteTodo, updateTodo };
}

let Store = createContainer(useStore);

export { Store };
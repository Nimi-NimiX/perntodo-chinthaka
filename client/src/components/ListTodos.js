import React, { useEffect, useState } from "react";
import EditTodos from "./EditTodos";
import { fetchTodos } from "../API/fetchTodos";
import { deleteTodo } from "../API/deleteTodo";

const ListTodos = () => {
    const [todos, setTodos] = useState(null);

    /*
    call fetchTodos() from fetchTodos.js and set the response to todos state.
    cleanup function is used to prevent memory leak.
    */
    useEffect(() => {
        let isMounted = true;

        const res = fetchTodos();
        res.then((res) => {
            if (isMounted) {
                setTodos(res);
            } else {
                setTodos([]);
            }
        });

        return () => {
            isMounted = false;
        };
    }, []);

    /*
    call deleteTodo() from deleteTodo.js and pass the todo_id as an argument. 
    */
    const deelteTodo = async (id) => {
        try {
            const res = await deleteTodo(id);
            if (res.status === 200) {
                setTodos(todos.filter((todo) => todo.todo_id !== id));
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <table id="table" className="table mt-5 text-center">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {todos === null ? (
                        <tr>
                            <td colSpan="3">
                                <div className="spinner-border text-primary m-5" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </td>
                        </tr>
                    ) : todos.length === 0 ? (
                        <tr>
                            <td colSpan="3" className="p-5">
                                <h4 className="text-center">No Todos Found !</h4>
                            </td>
                        </tr>
                    ) : (
                        todos.map((todo) => (
                            <tr key={todo.todo_id}>
                                <td className="align-middle">{todo.description}</td>
                                <td>
                                    <EditTodos todo={todo} />
                                </td>
                                <td>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => {
                                            deelteTodo(todo.todo_id);
                                        }}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </>
    );
};

export default ListTodos;

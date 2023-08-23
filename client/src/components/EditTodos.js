import React, { useState } from "react";
import { updateTodo } from "../API/updateTodo";

const EditTodos = ({ todo }) => {

    const [description, setDescription] = useState(todo.description);

    const editTodo = async (e) => {
        e.preventDefault();
        try {
            const res = await updateTodo({ id: todo.todo_id, description: description });
            if (res.status === 200) {
                window.location = "/";
            }
        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <>
            <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target={`#todo-${todo.todo_id}`}>
                Edit
            </button>


            <div className="modal fade" id={`todo-${todo.todo_id}`} >
                <div className="modal-dialog modal-dialog-centered ">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h4 className="modal-title">Edit todo</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={() => { setDescription(todo.description) }}></button>
                        </div>

                        <div className="modal-body">
                            <input type="text" value={description} onChange={(e) => { setDescription(e.target.value) }} className="form-control" />
                        </div>

                        <div className="modal-footer">
                            <button type="submit" className="btn btn-warning" ty data-bs-dismiss="modal" onClick={(e) => { editTodo(e) }}>Edit</button>
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={() => { setDescription(todo.description) }}>Close</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default EditTodos;
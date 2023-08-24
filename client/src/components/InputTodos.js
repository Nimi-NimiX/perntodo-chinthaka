import React, { useState } from 'react';
import { addTodo } from '../API/addTodo';

const InputTodo = () => {

    const [description, setDescription] = useState('');

    const onsubmitform = async (e) => {
        e.preventDefault();

        try {
            const res = await addTodo({ description: description });
            if (res.status === 200) {
                window.location.reload();
            }
        } catch (error) {

        }
    };

    return (
        <>
            <h1 className="text-center mt-5">TODO LIST</h1>
            <form className="d-flex gap-2 mt-5 mb-3" onSubmit={onsubmitform}>
                <input type="text" value={description} className="form-control" placeholder='Type here...' onChange={(e) => { setDescription(e.target.value) }} />
                <button type='submit' className="btn btn-success">Add</button>
            </form>
            <div id='alert'></div>
        </>
    );
};

export default InputTodo;
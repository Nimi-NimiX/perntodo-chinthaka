import React, { useState } from "react";
import { addTodo } from "../API/addTodo";
import TextField from "@mui/material/TextField";
import {
    Collapse,
} from "@mui/material";
import { Store } from "../utils/store";
import Header from '../styles/Typeography/Heading';
import AddButton from '../styles/Buttons/AddButton';
import WarnAlert from "../styles/Alert/WarnAlert";

const InputTodo = () => {
    const [description, setDescription] = useState("");
    const [alert, setAlert] = useState(false);
    const [adding, setAdding] = useState(false);
    const todoState = Store.useContainer();

    const onsubmitform = async (e) => {
        e.preventDefault();

        /**
         * If the description is empty, then set the alert to true and return
         * else add the todo to the database
         */
        if (description === "") {
            setAlert(true);
            return;
        }

        try {
            setAdding(true);
            const res = await addTodo({ description: description });
            if (res.status === 200) {
                todoState.addTodo(res.data);
                setDescription("");
                setAdding(false);
            }
        } catch (error) { }
    };

    return (
        <>
            <Header>
                Todo List App
            </Header>

            <form className="d-flex gap-2 mt-5 mb-3" onSubmit={onsubmitform}>
                <TextField
                    fullWidth
                    label="Add todo here.."
                    variant="outlined"
                    value={description}
                    onChange={(e) => {
                        setDescription(e.target.value);
                    }}
                />
                <AddButton onClick={onsubmitform} loading={adding}>
                    Add
                </AddButton>
            </form>

            <Collapse in={alert}>
                <WarnAlert setAlert={setAlert}>
                    Please enter a valid todo description
                </WarnAlert>
            </Collapse>
        </>
    );
};

export default InputTodo;

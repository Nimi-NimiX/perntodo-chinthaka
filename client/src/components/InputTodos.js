import React, { useState } from "react";
import { addTodo } from "../API/addTodo";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import {
    Alert,
    AlertTitle,
    Collapse,
    IconButton,
    Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const InputTodo = () => {
    const [description, setDescription] = useState("");
    const [alert, setAlert] = useState(false);
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
            const res = await addTodo({ description: description });
            if (res.status === 200) {
                window.location.reload();
            }
        } catch (error) { }
    };

    return (
        <>
            <Typography variant="h4" align="center" color="text.secondary">
                Todo List App
            </Typography>
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
                <Button variant="contained" color="primary" onClick={onsubmitform}>
                    Add
                </Button>
            </form>
            <Collapse in={alert}>
                <Alert
                    severity="error"
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                setAlert(false);
                            }}
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                    sx={{ mb: 2 }}
                >
                    <AlertTitle>Error</AlertTitle>
                    Please enter a valid todo description
                </Alert>
            </Collapse>
        </>
    );
};

export default InputTodo;

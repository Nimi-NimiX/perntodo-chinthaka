import React, { useState } from "react";
import { updateTodo } from "../API/updateTodo";
import { Store } from "../utils/store";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Stack,
    TextField,
} from "@mui/material";

const EditTodos = ({ todo }) => {
    const [model, setModel] = useState(false);
    const [description, setDescription] = useState(todo.description);
    const toodState = Store.useContainer();

    const openModel = () => {
        setModel(true);
    };
    const closepopup = () => {
        setModel(false);
        setDescription(todo.description);
    };

    const editTodo = async (e) => {
        e.preventDefault();
        try {
            const res = await updateTodo({
                id: todo.todo_id,
                description: description,
            });
            if (res.status === 200) {
                toodState.updateTodo({
                    id: todo.todo_id,
                    description: description,
                })
                setModel(false);
            }
        } catch (error) {
        }
    };

    return (
        <>
            <Button variant="contained" color="secondary" onClick={openModel}>
                Edit
            </Button>

            <Dialog
                open={model}
                onClose={closepopup}
                fullWidth
                maxWidth="sm"
            >
                <DialogTitle> Edit Todo </DialogTitle>
                <DialogContent>
                    <Stack spacing={2} margin={2}>
                        <TextField variant="outlined" label="Description" value={description} onChange={(e) => { setDescription(e.target.value) }}></TextField>
                    </Stack>
                </DialogContent>
                <DialogActions>
                    <Button color="success" variant="contained" onClick={(e) => { editTodo(e) }}>Update</Button>
                    <Button onClick={closepopup} color="error" variant="contained">Close</Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default EditTodos;

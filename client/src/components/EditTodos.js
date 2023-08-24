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
    const [open, openchange] = useState(false);
    const [description, setDescription] = useState(todo.description);
    const toodState = Store.useContainer();

    const openModel = () => {
        openchange(true);
    };
    const closepopup = () => {
        openchange(false);
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
                openchange(false);
            }
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <>
            <Button variant="contained" color="secondary" onClick={openModel}>
                Edit
            </Button>

            <Dialog
                open={open}
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

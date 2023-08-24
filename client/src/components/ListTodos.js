import React, { useEffect } from "react";
import { fetchTodos } from "../API/fetchTodos";
import { deleteTodo } from "../API/deleteTodo";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from "@mui/material";
import EditTodos from "./EditTodos";
import { Store } from "../utils/store";

const ListTodos = () => {

    let todoState = Store.useContainer()

    /**
     * call fetchTodos() from fetchTodos.js and set the response to todos state.
     * cleanup function is used to prevent memory leaks.
     */
    useEffect(() => {
        let isMounted = true;

        const res = fetchTodos();
        res.then((res) => {
            if (isMounted) {
                todoState.setTodos(res);
            } else {
                todoState.setTodos([]);
            }
        });

        return () => {
            isMounted = false;
        };
    }, []);

    /**
        call deleteTodo() from deleteTodo.js and pass the todo_id as an argument. 
      */
    const deelteTodo = async (id) => {
        try {
            const res = await deleteTodo(id);
            if (res.status === 200) {
                todoState.deleteTodo(id);
            }
        } catch (error) {
        }
    };

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 450 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Description</TableCell>
                            <TableCell align="center">Edit</TableCell>
                            <TableCell align="center">Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {todoState.todos.map((todo) => (
                            <TableRow
                                key={todo.todo_id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {todo.description}
                                </TableCell>
                                <TableCell align="center"> <EditTodos todo={todo} /> </TableCell>
                                <TableCell align="center"> <Button variant="contained" color="error" onClick={() => deelteTodo(todo.todo_id)}>Delete</Button> </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default ListTodos;

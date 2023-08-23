import axios from "axios";

async function updateTodo({ id, description }) {
    try {
        const res = await axios.put(`http://localhost:3000/todos/${id}`, { description });
        return res;
    } catch (error) {
        console.error(error.message);
    }
}

export { updateTodo };
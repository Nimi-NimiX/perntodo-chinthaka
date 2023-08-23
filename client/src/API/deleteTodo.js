import axios from "axios";

async function deleteTodo(id) {
    try {
        const res = await axios.delete(`http://localhost:3000/todos/${id}`);
        return res;
    } catch (error) {
        console.error(error.message);
    }
}

export { deleteTodo };
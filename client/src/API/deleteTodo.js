import axios from "axios";

async function deleteTodo(id) {
    const BASE_URL = process.env.REACT_APP_BASE_URL;

    try {
        const res = await axios.delete(`${BASE_URL}/todos/${id}`);
        return res;
    } catch (error) {
        console.error(error.message);
    }
}

export { deleteTodo };
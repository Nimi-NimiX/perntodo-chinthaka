import axios from "axios";

async function updateTodo({ id, description }) {
    const BASE_URL = process.env.REACT_APP_BASE_URL;

    try {
        const res = await axios.put(`${BASE_URL}/todos/${id}`, { description });
        return res;
    } catch (error) {
        console.error(error.message);
    }
}

export { updateTodo };
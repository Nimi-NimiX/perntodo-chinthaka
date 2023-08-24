import axios from "axios";

async function addTodo({ description }) {
    const BASE_URL = process.env.REACT_APP_BASE_URL;

    try {
        const res = await axios.post(`${BASE_URL}/todos`, { description });
        return res;
    } catch (error) {
        return error;
    }
}

export { addTodo };
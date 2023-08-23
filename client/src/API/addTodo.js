import axios from "axios";

async function addTodo({ description }) {
    try {
        const res = await axios.post("http://localhost:3000/todos", { description });
        return res;
    } catch (error) {
        console.error(error.message);
    }
}

export { addTodo };
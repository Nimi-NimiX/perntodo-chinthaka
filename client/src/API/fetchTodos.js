import axios from 'axios';

async function fetchTodos() {
    try {
        const res = await axios.get('http://localhost:3000/todos');
        return res.data;
    } catch (error) {
        console.error(error.message);
        return [];
    }
}

export { fetchTodos };
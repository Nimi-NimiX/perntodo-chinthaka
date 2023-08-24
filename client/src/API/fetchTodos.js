import axios from 'axios';

async function fetchTodos() {
    const BASE_URL = process.env.REACT_APP_BASE_URL;

    try {
        const res = await axios.get(`${BASE_URL}/todos`);
        return res.data;
    } catch (error) {
        console.error(error.message);
        return [];
    }
}

export { fetchTodos };
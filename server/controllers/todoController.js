const pool = require("../database/connection");

module.exports = {
    /**
    * get all todos from the database and return them
     */
    async getAll(req, res) {
        try {
            const allTodos = await pool.query("SELECT * FROM todo");
            res.status(200).json(allTodos.rows);
        } catch (error) {
            console.error(error.message);
        }
    },

    /**
     * get a todo from the database and return it
     */
    async getOne(req, res) {
        try {
            const { id } = req.params;
            const getTodo = await pool.query(
                "SELECT * FROM todo WHERE todo_id = $1",
                [id]
            );
            res.json(getTodo.rows[0]);
        } catch (error) {
            console.error(error.message);
        }
    },

    /**
     * add a todo to the database and return it
    */
    async add(req, res) {
        try {
            const { description } = req.body;
            const newTodo = await pool.query(
                "INSERT INTO todo (description) VALUES($1) RETURNING *",
                [description]
            );
            res.json(newTodo.rows[0]);
        } catch (error) {
            console.error(error.message);
        }
    },

    /**
     * update a todo in the database 
     */
    async update(req, res) {
        try {
            const { id } = req.params;
            const { description } = req.body;
            const updateTodo = await pool.query(
                "UPDATE todo SET description = $1 WHERE todo_id = $2",
                [description, id]
            );
            res.status(200).json("Todo was updated successfully");
        } catch (error) {
            console.error(error.message);
        }
    },

    /**
     * delete a todo from the database
     */
    async remove(req, res) {
        try {
            const { id } = req.params;
            const deleteTodo = await pool.query(
                "DELETE FROM todo WHERE todo_id = $1",
                [id]
            );
            res.status(200).json("Todo was deleted successfully");
        } catch (error) {
            console.error(error.message);
        }
    },
};

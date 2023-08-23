const express = require('express');
const router = express.Router();

/**
 * Import todoController from controllers
 */

const todoController = require('../controllers/todoController');


/**
 * Forward the request to the corresponding controller
*/

router.get('/', todoController.getAll)

router.get('/:id', todoController.getOne)

router.post("/", todoController.add);

router.put('/:id', todoController.update)

router.delete('/:id', todoController.remove)

module.exports = router;
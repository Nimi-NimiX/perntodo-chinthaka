const express = require('express');
const app = express();
const cors = require('cors');

//middleware
app.use(cors());
app.use(express.json());

const router = require('./routes/todoRoutes');

//route for all todo operations
app.use('/todos', router);

app.listen(3000, () => {
    console.log('Server Running on port 3000');
})
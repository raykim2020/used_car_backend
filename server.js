require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000;
require('./config/database');


app.use(cors())
app.use(express.json());


// app.use("/tasks", taskController)
app.use(require('./config/checkToken'));
app.use('/api/listingItem', require('./routes/api/listingItem'))
app.use('/api/users', require('./routes/api/user'))
const ensureLoggedIn = require('./config/ensureLoggedIn');
app.use('/api/items', require('./routes/api/shopItem'));
app.use('/api/orders', require('./routes/api/cart'));
app.listen(PORT, () => {
    console.log(`Running on port: ${PORT}`)
})
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config()

const app = express();

const productsController = require('./controllers/products_controller');

const {
    PORT,
    CONNECTION_STRING, 
} = process.env


massive(process.env.CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance)
}).catch( err => console.error(err) );


app.get('/api/products', productsController.getAll);
app.get('/api/productss/:id', productsController.getOne);
app.put('/api/products/:id', productsController.update);
app.post('/api/products', productsController.create);
app.delete('/api/products/:id', productsController.delete);


app.listen(PORT, () => {
    console.log(`Server is up and listening on ${PORT}`)
});
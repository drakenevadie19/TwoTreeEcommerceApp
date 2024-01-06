import express from 'express';

import { cartItems as cartItemsRaw, products as productsRaw, } from './temp-data';

const app = express();

// GET endpoint sample
app.get('/hello', (req, res) => {
    res.send('This is GET request!');
})

// Loading list of products
app.get('/products', (req, res) => {
    res.json(products);
})

// Loading user's current shopping cart
app.get('/cart', (req, res) => {
    res.json(cartItems);
})

// Loading list of products
app.get('/products/:productId', (req, res) => {
    const productId = req.params.productId;
    const product = products.find(product => product.id === productId);

    if (product) {
        res.json(product)
    } else {
        res.sendStatus(404);
        console.log('product with id=' + productId + ' not found');
    }
})


let cartItem = cartItemsRaw;
let productItem = productsRaw;

app.use(express.json());

// Add an item to shopping cart
app.post('/cart', (req, res) => {
    // In this POST request, we have add item's id to request body => We can get that id 
    const productId = req.body.id;
    // Find that product
    const product = productItem.find(product => product.id === productId);
    // Once we found that product, insert it to cart
    cartItem.push(product);
    res.json(cartItem);
})

// Server listen to request
app.listen(8000, () => {
    console.log('Server is listening on port 8000');
})
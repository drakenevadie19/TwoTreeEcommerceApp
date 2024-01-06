import express from 'express';

import { cartItems as cartItemsRaw, products as productsRaw, } from './temp-data';

let cartItem = cartItemsRaw;
let productItem = productsRaw;


const app = express();

// Function to convert all ids of items to products 
//  => if we assign this function to a variable, we can get an array/list of products
function populatedCartIds(ids) {
    return ids.map(id => productItem.find(product => product.id === id));
}

// Loading list of products
app.get('/products', (req, res) => {
    res.json(productItem);
})

// Loading user's current shopping cart
app.get('/cart', (req, res) => {
    // Use map function to map id to corresponding product
    const populatedCart = populatedCartIds(cartItem);
    res.json(populatedCart);
})

// Loading list of products
app.get('/products/:productId', (req, res) => {
    const productId = req.params.productId;
    const product = productItem.find(product => product.id === productId);

    if (product) {
        res.json(product)
    } else {
        res.sendStatus(404);
        console.log('product with id=' + productId + ' not found');
    }
})

app.use(express.json());

// Add an item to shopping cart
app.post('/cart', (req, res) => {
    // In this POST request, we have add item's id to request body => We can get that id 
    const productId = req.body.id;
    // Find that product
    //  const product = productItem.find(product => product.id === productId);
    // Once we found that product, insert it to cart
    cartItem.push(productId);
    
    // An array of products corresponding to current shopping cart 
    const populatedCart = populatedCartIds(cartItem);
    res.json(populatedCart);
})

// Remove item from cart 
app.delete('/cart/:productId', (req, res) => {
    const productId = req.params.productId;
    // Since we have id of item to remove, we will filter out all ids in cartItem match productId
    //  => cartItem array only contain ids that does not match productId
    cartItem = cartItem.filter(cartitemId => cartitemId !== productId);
    const populatedCart = populatedCartIds(cartItem);
    res.json(populatedCart);
})

// Server listen to request
app.listen(8000, () => {
    console.log('Server is listening on port 8000');
})
import express from 'express';

import { cartItems as cartItemsRaw, products as productsRaw, } from './temp-data';

import { MongoClient } from 'mongodb';

let cartItem = cartItemsRaw;
let productItem = productsRaw;

async function startTheServer() {
    const client = new MongoClient(url);

    // Connect to the db and select the db 
    await client.connect();
    const db = client.db('ecomnerce-app');
    
    // FROM NOW ON, WE CAN USE db variable FOR database querries

    const app = express();
    app.use(express.json());
  

    // Function to convert all ids of items to products 
    //  => if we assign this function to a variable, we can get an array/list of products
    async function populatedCartIds(ids) {
        return Promise.all(ids.map(id => db.collection('products').findOne({ id })));
    }

    // Loading list of products
    app.get('/products', async (req, res) => {
        // Connect to the client 

        const products = await db.collection('products').find({}).toArray();
        res.send(products);
    })

    // Loading user's current shopping cart
    app.get('/users/:userId/cart', async (req, res) => {
        // Get the users from db
        const user = await db.collection('users').findOne({ id: req.params.userId });
        const populatedCart = await populatedCartIds(user.cartItems);
        res.json(populatedCart);
    })

    // Loading list of products
    app.get('/products/:productId', async (req, res) => {
        // Connecting the db and select the db
        const productId = req.params.productId;
        const product = await db.collection('products').findOne({ id: productId });

        res.json(product)
    })

    // Add an item to shopping cart
    app.post('/users/:userId/cart', async (req, res) => {
        const userId = req.params.userId;

        // use userId to load and update their cartItems property
        // In this POST request, we have add item's id to request body => We can get that id 
        const productId = req.body.id;
        // Find that product
        //  const product = productItem.find(product => product.id === productId);
        // Once we found that product, insert it to cart
        await db.collection('users').updateOne({ id: userId }, {
            $push: { cartItems: productId }
        })
        
        // An array of products corresponding to current shopping cart 
        const user = await db.collection('users').findOne({ id: req.params.userId });
        const populatedCart = await populatedCartIds(user.cartItems);
        res.json(populatedCart);
    })

    // Remove item from cart 
    app.delete('/users/:userId/cart/:productId', async (req, res) => {

        const userId = req.params.userId;

        const productId = req.params.productId;

        await db.collection('users').updateOne({ id: userId }, {
            $pull: { cartItems: productId }
        })

        // An array of products corresponding to current shopping cart 
        const user = await db.collection('users').findOne({ id: userId });
        const populatedCart = await populatedCartIds(user.cartItems);
        res.json(populatedCart);
    })

    // Server listen to request
    app.listen(8000, () => {
        console.log('Server is listening on port 8000');
    })
}

startTheServer();
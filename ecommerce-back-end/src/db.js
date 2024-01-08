import { MongoClient } from 'mongodb';
let db;

async function connectToDB(callback) {
    // 27017 is default port for MongoDB
    // const client = new MongoClient('mongodb://127.0.0.1:27017');
    const url = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.nve8zrs.mongodb.net/?retryWrites=true&w=majority`;
    const client = new MongoClient(url);
    await client.connect();

    db = client.db('ecomnerce-app');
    callback();
}

export {
    db, 
    connectToDB,
}
import express from 'express';

const app = express();

// GET endpoint 
app.get('/hello', (req, res) => {
    res.send('This is GET request!');
    // console.log("This is GET request");
})

app.listen(8000, () => {
    console.log('Server is listening on port 8000');
})
const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to handle JSON parse errors
app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        console.error('Bad JSON:', err);
        return res.status(400).send({ error: 'Invalid JSON' }); // Respond with 400 Bad Request
    }
    next();
});

app.get('/', (req, res) => {
    res.send("Hello from node API");
});

app.post('/api/products', (req, res) => {
    console.log(req.body);
    res.send("Send products");
});

mongoose.connect("mongodb+srv://admin:manworkedup123@atlascluster.oogtuou.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster")
    .then(() => {
        console.log("Connected to db");
        app.listen(3000, () => {
            console.log("Running on port 3000");
        });
    })
    .catch((error) => {
        console.error("Connection failed", error);
    });

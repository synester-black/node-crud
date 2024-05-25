const express = require('express');
const mongoose = require('mongoose');
const app = express()
// Using Node.js `require()`


app.listen(3000, ()=>{
    console.log("Running on port 3000");
});

app.get('/', (req,res) =>{
    res.send("Hello from node API");

});

mongoose.connect("mongodb+srv://admin:manworkedup123@atlascluster.oogtuou.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster")
.then(()=> {
    console.log("Connected to db");
})
.catch(()=>{
    console.log("Connection failed");
});
const express = require('express');
const app = express();
const mongoose = require("mongoose");

app.get('/ping', (req, res) => {
    try {
        res.status(200).send({msg:'pong'});
    } catch (error) {
        res.status(500).send({msg:"something went wrong"})
    }
});


app.listen(3000, async() => {
    try {
        await mongoose.connect("mongodb+srv://bhumireddysahithi:Sa%40041006@cluster0.wuzj0.mongodb.net/");
        console.log("Server connected successfully!")
    } catch (error) {
        console.log("Error")
    }
});
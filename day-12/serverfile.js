const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// connect to mongodb(make sure mongod is running)
mongoose.connect("mongodb://127.0.0.1:27017/moondb")
    .then(() => console.log("Hurray - MongoDB connected"))
    .catch(err => console.error("oops - mongodb connection error:", err));

// define schema + model
const userSchema = new mongoose.Schema({
    name: String,
    gender: String,      // Integers are stored as Numbers in Mongoose
    total: Number,   // Floats are also stored as Numbers
});
const User = mongoose.model('User', userSchema);

// test route
app.get('/', (req, res) => {
    res.send("Backend is working!");});

// get all users
//async function will return a promise, that's what is response for our request
app.get("/users",async (req,res) =>{
    try{
        const users = await User.find();
        res.json(users);
    }
    catch(err){
        res.status(500).json({error:err.message});
    }
});

// Add a new user
app.post("/users",async(req,res) => {
    try{
        const user= new user({name:req.body.name});
        await user.save();
        res.json(user);
    }
    catch(err){
        res.status(500).json({error:err.message});
    }
});

// Start server
app.listen(5000,() => console.log("🚀 server running on http://localhost:5000"));
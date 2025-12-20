const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

//array of objects
let user = [
    { id : 1,name : "Nidhiesh",email : "nidhiesh@2006"},
    {id : 2,name : "Thamizh" , email :"thamizh@2006"}
];

//routes start below this
//getting json file as respoonse for request
app.get("/user",(req,res)=>{
    res.json(user);
});

//add data into server(body)
app.post("/user",(req,res) => {
    const newUser = {id : Date.now(), ...req.body};
    user.push(newUser);
    res.json(newUser);
})
app.listen(5000, ()=>{
    console.log("Server running on port 5000");
});
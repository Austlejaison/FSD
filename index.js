// 1.importing the express
const express = require("express");

 
// 2.initialize
const app = new express();


//middleware
app.use(express.urlencoded({extented:true}));
app.use(express.json())
// 3.Api creation
app.get("/trial",(req,res) =>{
    res.json("Hello Boy");
})

app.post('/login',(req,res)=>{
    console.log(req.body);
    res.send("data added");
})
// 4.port
app.listen(3010,(req,res) =>{
    console.log("port 3010 is active")
})
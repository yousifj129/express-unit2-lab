
const express = require("express") //importing express package

const app = express() // creates a express application
// app.use(express.static('views'));
app.use(express.static('public'));


app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/views/index.html")
})
app.get("/about",(req,res)=>{
    res.sendFile(__dirname + "/views/about.html")
})
app.get("/test",(req,res)=>{
    res.sendFile(__dirname + "/views/test.html")
})


app.listen(3000,()=>{
    console.log("Listening on port 3000")
})
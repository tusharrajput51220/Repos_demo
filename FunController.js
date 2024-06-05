const express=require("express")
const app=express.Router()

app.get("/", (req,res) =>  {
    res.status(200).json("Hello")
})

app.post("/:id", (req, res) => {
     const id=req.params.id
    res.status(200).json(`Received a ${id} POST request`);
});

module.exports=app
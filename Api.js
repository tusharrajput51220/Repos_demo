const express=require("express")
const app=express()
const port=8000
const controller=require("./FunController")
app.use("/",controller)


app.listen(port, () => {
    console.log(`App is listening to port ${port}`);
})
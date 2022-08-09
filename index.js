const express=require("express");
const ejs=require("ejs");
const path=require("path");
const port=process.env.PORT || 3000;
const app=express();
const staticpath=path.join(__dirname,"/public");
app.use(express.static(staticpath))
app.set("view engine","ejs");
app.get("/",(req,res)=>{
    res.render("home");
})
app.get("/buynow",(req,res)=>{
    res.render("buynow");
    
})
app.listen(port,()=>{
    console.log("Connected...");
})
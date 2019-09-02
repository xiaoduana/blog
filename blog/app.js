const express=require("express"),
      fs=require("fs"),
      path=require("path"),
      mongoose=require("mongoose");
let app=express();

app.listen(3000);
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("./public"));
app.set("view engine","ejs");
app.get("/",(req,res)=>{res.render("index")})
app.get("/game",(req,res)=>{res.render("game")})
app.post("/reg",require("./routers/reg"))
let ads=path.join(__dirname,"/img/ico.png");
app.get("/favicon.ico",(req,res)=>{res.sendFile(ads)})
//连接数据库



const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/blog",{useNewUrlParser:true}).then(console.log("连接成功"))
const Schema=mongoose.Schema;//拿到规则
const userSchema=new Schema({
      username:{
        type:String,
        required:true,
        match:/^[\d_a-z\u4e00-\u9fa5]{2,18}$/i
      },
      password:{
        type:String,
        required:true,
        match:/^[\d_a-z,!@#\^&*()+\[\]{}\-=\.<>？]{6,18}$/i
      }
});//定义规则
module.exports=mongoose.model("user",userSchema)
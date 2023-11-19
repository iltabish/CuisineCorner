const moongoose=require("mongoose");
var validator = require('validator');


const userSchema=new moongoose.Schema({
    name :{
        type:String,
        required:true,
    },
     email :{
        type:String,
        required:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid email")
            }
        }
    },
    phone:{
        type:Number,
        required:true,
        min:10
    },
    message:{
        type:String,
        required:true,
        minLength: 10,
        maxLength: 100
    },
    date:{
        type:Date,
        default:Date.now
    }
})

const Register=new moongoose.model("Register",userSchema);

module.exports=Register;
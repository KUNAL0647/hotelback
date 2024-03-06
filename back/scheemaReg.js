const mongoose=require('mongoose');
const schema=mongoose.Schema

let reg =new schema({

     name:{
        type:String
    },
    lastname:{
        type:String
    },
    gmailid:{
        type:String
    },
    username:{
        type:String
    },
    password:{

        type:String
    },
    mobileno:{
        type:String
    },
    country:{
        type:String
    },
    state:{
        type:String
    },
    profileimg:{
        type:String
    },
    city:{
        type:String
    },
    pincode:{
        type:String
    },



},
{
    collection:'UserRegistration'
}

)
module.exports=mongoose.model("UserRegistration",reg)
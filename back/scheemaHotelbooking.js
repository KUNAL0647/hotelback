const mongoose=require('mongoose');
const schema=mongoose.Schema

let hotelbooking =new schema({

     fullname:{
        type:String
    },
    
    gmailid:{
        type:String
    },
    username:{
        type:String
    },
  
    mobileno:{
        type:String
    },
    checkoutdate:{
        type:String
    },
    checkindate:{
        type:String
    },
    child:{
        type:String
    },
    adult:{
        type:String
    },
    aadhar:{
        type:String
    },
    hotelname:{
        type:String
    },
    hotellocation:{
        type:String
    },



},
{
    collection:'Hotelbookings'
}

)
module.exports=mongoose.model("Hotelbookings",hotelbooking)
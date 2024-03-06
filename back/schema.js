const mongoose=require('mongoose');
const schema=mongoose.Schema

let hotel =new schema({

    hotelname:{
        type:String
    },
    hotelimage:{
        type:String
    },
    hotellocation:{
        type:String
    },
    hoteldays:{
        type:String
    },
    hotelrent:{

        type:String
    },


},
{
    collection:'Hoteldetails'
}

)
module.exports=mongoose.model("Hoteldetails",hotel)
const mongoose = require('mongoose');
const State = require("./state.js");
const MONGO_URL = "mongodb://127.0.0.1:27017/travelbharat";

async function main() {
    await mongoose.connect(MONGO_URL);
};
main().then(() => {
    console.log("connected to place Schema");
}   ).catch((err) => {
    console.log(err.console.errors);
});

const placeSchema=new mongoose.Schema({
    title : {
        type : String,
        // required :true,
    },
    description : {
        type : String,  
        // required : true,
    },
    city : {
        type : String,
        // required : true
    },
    location : {    
        type : String,
        // required : true
    },
    bestTime : {
        type : String,
        // required : true
    },
    timings : {
        type : String,
        // required : true ,
    },
    entryFee : {
        type : String,
        // required : true 
    },
    image: {
        type: String,
        default:
            "https://images.unsplash.com/photo-1625505826533-5c80aca7d157?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdvYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        set: (v) =>
        v === ""
            ? "https://images.unsplash.com/photo-1625505826533-5c80aca7d157?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdvYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
            : v,
    },
    category : {
        type : String,
    },
    state :{
        type : String,
    },
    stateId : {
        type : Number,
    }

});

const Place=mongoose.model("Place",placeSchema);

module.exports=Place;
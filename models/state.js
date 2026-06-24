const mongoose = require('mongoose');
const MONGO_URL = "mongodb://127.0.0.1:27017/travelbharat";

async function main() {
    await mongoose.connect(MONGO_URL);
};
main().then(() => {
    console.log("connected to state Schema");
}   ).catch((err) => {
    console.log(err.console.errors);
});

const travelSchema=new mongoose.Schema({
    stateId:{
        type : Number,
        required : true 
    },
    stateNM:{
        type : String,
        required : true
    },
    capital :{
        type : String,
        required : true
    },
    region : {
        type : String,
        required : true
    },
    image : {
        type : String,
        
    },    
});

const State = mongoose.model("State", travelSchema);

module.exports = State;
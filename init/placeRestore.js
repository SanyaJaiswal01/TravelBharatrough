const mongoose=require("mongoose");
const initData=require("./placeData.js");
const schema=require("../models/place.js");
const MONGO_URL="mongodb://127.0.0.1:27017/travelbharat";

async function main(){
    await mongoose.connect(MONGO_URL);
}
main().then(()=>{
    console.log("connected to place restore Schema");
}).catch((err)=>{
    console.log(err.console.errors);
});

const initDb=async()=>{
    await schema.deleteMany({});
    await schema.insertMany(initData);
    console.log("place data stored to website");
}

initDb().catch((err) => {
    console.error("Failed to seed place data:", err);
});















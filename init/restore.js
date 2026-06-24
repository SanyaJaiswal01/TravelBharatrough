const mongoose=require("mongoose");
const initData=require("./data.js");
const schema=require("../models/state.js");
const MONGO_URL="mongodb://127.0.0.1:27017/travelbharat";

async function main(){
    await mongoose.connect(MONGO_URL);
}
main().then(()=>{
    console.log("connected to state restore Schema");
}).catch((err)=>{
    console.log(err.console.errors);
});

const initDb=async()=>{
    await schema.deleteMany({});
    await schema.insertMany(initData.data);
    console.log("state data stored to website");
}

initDb();
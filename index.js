require("dotenv").config();
const express=require("express");
const app=express();
const PORT=process.env.PORT;
const mongoose=require("mongoose");
// const MONGO_URL="mongodb://127.0.0.1:27017/travelbharat";
const MONGO_URL=process.env.MONGO_URL;
const State=require("./models/state.js");
const Place=require("./models/place.js");
const { v4 : uuidv4 }= require("uuid");
const ejsMate=require("ejs-mate");
const path=require("path");
const ExpressError=require("./utils/ExpressError.js");
const wrapAsync=require("./utils/WrapAsync.js");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"/public")));
app.engine("ejs",ejsMate)
app.use(express.urlencoded({extended:true}));
const methodOverride=require("method-override");
app.use(methodOverride("_method"));

main().then(()=>{
    console.log("Connected to DB");
}).catch((err)=>{
    console.log("Error connecting to db",err);
});

async function main(){
    await mongoose.connect(MONGO_URL);
}
app.get("/",(req,res)=>{
    res.render("pages/Home.ejs");
});

app.get("/states",wrapAsync( async (req,res)=>{
    const allState=await State.find({});
    res.render("pages/states.ejs",{allState});
}));

app.get("/states/:id/:id",wrapAsync( async (req,res)=>{
    let {id}=req.params;
    const onePlace=await Place.findById(id);
    res.render("pages/placeDetails.ejs",{onePlace });
})
);
app.get("/states/:id",wrapAsync( async (req,res)=>{
    let {id} = req.params;
    const state = await State.findById(id);
    console.log(state.stateId);
    if (!state) {
        return res.status(404).send('State not found');
    }

    const places = await Place.find({ stateId: { $eq: state.stateId } });
    res.render("pages/places.ejs", { state, places });

})
);
app.get("/category/heritage",wrapAsync( async(req,res)=>{
    const state = await State.find({});
    const allPlace=await Place.find({});
    res.render("pages/category/heritage.ejs",{allPlace, state});

})
);
app.get("/category/nature",wrapAsync( async(req,res)=>{
    const state = await State.find({});
    const allPlace=await Place.find({});
    res.render("pages/category/nature.ejs",{allPlace, state});

})
);
app.get("/category/religious",wrapAsync ( async(req,res)=>{
    const state = await State.find({});
    const allPlace=await Place.find({});
    res.render("pages/category/religious.ejs",{allPlace, state});

})
);
app.get("/category/adventure",wrapAsync ( async(req,res)=>{
    const state = await State.find({});
    const allPlace=await Place.find({});
    res.render("pages/category/adventure.ejs",{allPlace, state});

})
);
app.get("/category/beach",wrapAsync( async(req,res)=>{
    const state = await State.find({});
    const allPlace=await Place.find({});
    res.render("pages/category/beach.ejs",{allPlace, state});

})
);
app.get("/category/mountain",wrapAsync( async(req,res)=>{
    const state = await State.find({});
    const allPlace=await Place.find({});
    res.render("pages/category/mountain.ejs",{allPlace, state});

})
);
app.get("/category/wildlife",wrapAsync( async(req,res)=>{
    const state = await State.find({});
    const allPlace=await Place.find({});
    res.render("pages/category/wildlife.ejs",{allPlace, state});

})
);
app.get("/category/hill_station",wrapAsync( async(req,res)=>{
    const state = await State.find({});
    const allPlace=await Place.find({});
    res.render("pages/category/hill_station.ejs",{allPlace, state});

})
);
//localhost:8080/undefinedroute error handling
app.all("/{*splat}", (req,res,next)=>{
    next(new ExpressError(404,"Page Not Found"));
});
//middleware for error handling
app.use((err,req,res,next)=>{
    let {statusCode=500, message="Some Error Occurred"}=err;
    // res.status(statusCode).send(message);
    res.status(statusCode).render("pages/error.ejs",{err});

});

app.listen(PORT || 8080,()=>{
    console.log("app is listening at port :",PORT || 8080);
});

module.exports = app;

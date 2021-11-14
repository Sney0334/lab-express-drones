// Iteration #1
const mongoose = require('mongoose');

const Drone = require("../models/Drone.model");

const MONGO_URI =  "mongodb://localhost/lab-express-drones"

const dronesToBeCreated = async () =>{
    try{
        await mongoose.connect(MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useFindAndModify:false,
            useCreateIndex:true
        })
        await Drone.deleteMany()
        const newDrones = [
            { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
            { name: "Racer 57", propellers: 4, maxSpeed: 20 },
            { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
        ]
        await Drone.create(newDrones)
        console.log(`kept ${newDrones.length} in th db`)
    }catch(err){
        return err
    }
    console.log("getting out from data base");
    mongoose.disconnect()
}

dronesToBeCreated()

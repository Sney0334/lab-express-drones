// Iteration #1
const mongoose = require('mongoose');
const  schema = mongoose.schema;

const dronesSchema = new Schema({
    name:{type: String},
    propellers:{type: Number},
    maxSpeed:{type: Number},
})

 const Drone= mongoose.model("Drone", dronesSchema);

 module.exports = Drone;
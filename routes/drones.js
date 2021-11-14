const express = require('express');
const Drone = require('../models/Drone.model');
const router = express.Router();

// require the Drone model here

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  Drone.find().then((drones)=>{
    console.log(drones);
    res.render("drones/list",{drones})
  })
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render("../views/drones/create-form.hbs")
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  const {name, propellers, maxSpeed} = req.body
  Drone.create({name, propellers, maxSpeed})
  .then(newDrone=>{
    console.log(newDrone)
    res.render("../views/newDrone.hbs",newDrone)
  })
  .catch((err)=>{
    console.log(err)
  })
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const { id } = req.params
  Drones.findById(id)
  .then((drone)=>{
    res.render('../views/drones/update-form.hbs',{drone})
  })
  .catch((err)=>{
    console.log(err)
  })

});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const { id } = req.params
  Drones.findById(id)
  const {name, propellers, maxSpeed} =  req.body
  Drone.findByIdAndUpdate(id,{name, propellers, maxSpeed}, {new:true})
  .then(()=>{
    console.log("it works")
    res.redirect('/drones')
  })
  .catch((err)=>{
    console.log(err)
  })
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  const {id} = req.params
  Drone.findByIdAndDelete(id)
  .then(()=>{
    res.redirect('/drones')
  })
});

module.exports = router;

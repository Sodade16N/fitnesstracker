const { createWorkouts,getAllWorkouts} = require('../Controller/workoutsController');
const workoutsRouter = require('express').Router();

workoutsRouter.post('/workouts/:id', createWorkouts);
workoutsRouter.get('/workouts', getAllWorkouts)
workoutsRouter.get('/workouts/:id', getAllWorkouts)
module.exports = workoutsRouter
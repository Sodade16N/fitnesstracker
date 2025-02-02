
const usersModel = require('../models/users');
const workoutsModel = require('../models/workouts');
const { v4: uuidv4 } = require('uuid')



exports.createWorkouts = async (req, res) => {
    try {
        const { id } = req.params;
        const existUsers = await usersModel.findOne({ where: { id: id } });

        if (!existUsers) {
            return res.status(404).json('user does not exist')
        }
        
        const createDate = new Date().toLocaleDateString()
        const { workout_type, duration } = req.body;

        const existWorkouts = await workoutsModel.findOne({ where: { user_id: existUsers.dataValues.id, date: createDate } });

        if (existWorkouts) {
            return res.status(400).json('User cannot workout today again. Come back tomorrow')
        }

        const data = {
            id: uuidv4(),
            user_id: existUsers.dataValues.id,
            workout_type,
            duration,
            date: createDate
        }

        const createWorkouts = await workoutsModel.create(data)
        res.status(201).json({
            message: 'workouts created successfully',
            totalusers: createWorkouts.length,
            data: createWorkouts
        })
    } catch (error) {
        res.status(500).json({
            message: 'Internal server error',
            error: error.message
        })
    }
}

exports.getAllWorkouts = async (req, res) => {
    try {
      const users = await workoutsModel.findAll();
      res.status(200).json({
        message: 'Check workouts below',
        data: users
      })
    } catch (error) {
      res.status(500).json({
        message: 'Internal server error',
        error: error.message
      })
    }
  }


  exports.getAllWorkouts = async (req, res) => {
    try {
      const { id } = req.params;
      const existUsers = await usersModel.findOne({ where: { id: id } });

      if (!existUsers) {
          return res.status(404).json('user does not exist')
      }

      const users = await workoutsModel.findOne({ where: { user_id: existUsers.dataValues.id } });;
      res.status(200).json({
        message: 'Check workouts below',
        data: users
      })
    } catch (error) {
      res.status(500).json({
        message: 'Internal server error',
        error: error.message
      })
    }
  }

  // exports.getOne=async (req, res)=> {
//     try {
//         const store =await store.findByPK(req.params.id)
//         if (!store){
//          return  res.status(404).json("store not found")
//         }
//             res.status(200).json({
//                message:`kindly find below user with the above id`,
//                data:store
//             })
//     } catch (error) {
//         res.status(500).json({error:error.message})
   
//     }
//  } 
const { where } = require('sequelize');
const usersModel = require('../models/users');
const {v4:uuidv4} =require('uuid')

exports.createUsers = async (req, res) => {
  try {
    const {usersName,email} = req.body;
    const existUsers = await usersModel.findAll({ where: { email: email } });

    if (existUsers.length == 1) {
      return res.status(400).json('users already exist')
    }
  const data ={
    id:uuidv4(),
    usersName,
    email
  }
    const createUsers = await usersModel.create(data)

    res.status(201).json({
      message: 'users created successfully',
      totalusers: createUsers.length,
      data: createUsers
    })
  } catch (error) {
    res.status(500).json({
      message: 'Internal server error',
      error: error.message
    })
  }
}

exports.getAllUsers = async (req, res) => {
    try {
      const users = await usersModel.findAll();
      res.status(200).json({
        message: 'Check Users below',
        data: users
      })
    } catch (error) {
      res.status(500).json({
        message: 'Internal server error',
        error: error.message
      })
    }
  }

  

  
  
const { createUsers, getAllUsers } = require('../Controller/usersController');
const usersRouter = require('express').Router();

usersRouter.post('/users', createUsers);
usersRouter.get('/users', getAllUsers);

module.exports = usersRouter
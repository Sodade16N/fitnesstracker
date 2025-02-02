const express = require('express');
const port = 1550;
const sequelize = require('./database/sequelize')
const usersRouter = require('./Router/usersRouter');
const workoutsRouter = require('./Router/workoutsRouter');

const app = express();
app.use(express.json())
app.use(usersRouter)
app.use(workoutsRouter)

const server = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

server()

app.listen(port, () => {
  console.log(`Running on port: ${port}`);
})
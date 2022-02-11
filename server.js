const  express = require ('express')
const TaskRouter= require('./routes/Task')
const connectDB = require('./config/connectDB')
require("dotenv").config()
const app= express()

connectDB()

app.use(express.json())
app.use('/api/tasks', TaskRouter)


app.listen(process.env.port, ()=> console.log(` port is running on port ${process.env.port}`))
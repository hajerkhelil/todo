
const mongoose= require('mongoose')

// Schema to validate the data 
const  TaskSchema= new mongoose.Schema({
taskname: {type:String, required: true},
done: {type: Boolean, default:false}
})

module.exports= mongoose.model("Task", TaskSchema)
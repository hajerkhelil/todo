
const TaskSchema= require('../models/Task')
const  express= require('express')

const TaskRouter= express.Router();

// add new task
TaskRouter.post('/add', async(req,res)=> {

    try {
        const newtask=  await new  TaskSchema(req.body).save();
        res.status(200).send ({msg:"tesk added" , newtask})
    } catch (error) {
        res.status(500).send("could not add task")
    }
})


// get all the tasks you entred 
TaskRouter.get("/alltasks", async(req, res)=> {

    try {
        const tasks= await  TaskSchema.find();
        res.status(200).send({msg:"list of tasks", tasks})
    } catch (error) {
        res.status(500).send("could not get tasks")

    }
})

// update a chosen task 
TaskRouter.put("/update/:id", async (req,res) => {
    const {id}= req.params

    try {
        const updatedtask= await TaskSchema.findByIdAndUpdate(id, {$set: {...req.body}})
        res.status(200).send({msg:"task updated" , updatedtask})
    } catch (error) {
        res.status(500).send("could not update task")

    }
})


// dalete the chosen task 
TaskRouter.delete("/delete/:id", async(req,res) => {
    const {id}= req.params

    try {
        const deletedtask= await TaskSchema.findByIdAndDelete(id)
        res.status(200).send({msg:"task deleted" , deletedtask})

    } catch (error) {
        res.status(500).send("could not delete contact")

    }
})


module.exports=TaskRouter
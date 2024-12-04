import express from 'express';
export default class TaskRoutes{
    constructor(taskController){
        this.router = express.Router();
        this.taskController = taskController;
        this.initializeRoutes();
    }
    initializeRoutes(){
        //GET route for the '/' endpoint
        this.router.get('/', (req, res)=>{
            this.taskController.getTask(req, res)
        })
        // route for getting individual task Id
        this.router.get('/tasks/:id', (req, res)=>{
            this.taskController.getTaskById(req, res)
        })
        //route for posting a task id 
        this.router.post('/tasks', (req,res)=>{
            this.taskController.createTask(req,res)
        })
        //route for updating tasks
        this.router.put('/tasks/:id', (req, res)=>{
            this.taskController.updateTask(req,res)})

        //route for deleting tasks 
        this.router.delete('/tasks/:id', async (req, res)=>{
            this.taskController.deleteTask(req,res)
        })

    }    
    getRouter(){
        return this.router;
    } 
}
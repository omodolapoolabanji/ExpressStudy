import express from 'express'
import TaskRoutes from './routes/taskRoutes.js'
import TaskService from './services/taskService.js'
import TaskRepository from './repositories/taskRepo.js'
import TaskController from './controllers/taskController.js'


//intialize a new express application.the variable app represents a new web server. 
const app = express()
// set a port 
const port = 3000

// do I have to explicitly state this after declaring the app variable as an express application instance
app.use(express.json()) 

// initialize props 
const repository = new TaskRepository()
const service = new TaskService(repository)
const controller = new TaskController(service)
const routes = new TaskRoutes(controller)

app.use('/api',routes.getRouter() )

//get the app to listen for connections on the port defined earlier
//starts the express app and binds it to the port specified.
app.listen(port, ()=>{
    console.log(`testing listening on port ${port}`)
})

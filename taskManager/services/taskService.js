import TaskRepository from "../repositories/taskRepo";
class TaskService{
    constructor(taskRepo){
        this.taskRepo = taskRepo; 
    }
    //for now the methods will be synchronous. Make sure to use async awaits when dealing with a db connection. 

    getTasks(filter = null){
        // this should handle all forms of getTask calls and match to the right filters
        //get back to this
        if (filter === null){return this.taskRepo.getAllTasks()};
    }
    getTaskById(id){
        return this.taskRepo.getTaskById(id);
    }

    createTask(newTask){
        // we give the new task an id and store in the system
        newTask.id = this.taskRepo.getUniqueId(); 
        return this.taskRepo.createTask(newTask);
    }

    updateTask(id, newTask){
        try{
            return this.taskRepo.updateTask(id, newTask);
        }catch(error){
            throw error
        }
    }

    deleteTask(id){
        return this.taskRepo.deleteTask(id);
    }


}
export default TaskService; 
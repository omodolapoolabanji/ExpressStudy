class TaskService{
    constructor(taskRepo){
        this.taskRepo = taskRepo; 
        this.notFoundErrorMessage = 'No task with matching ID found.'
        this.notValidTaskMessage = 'This task is not valid!'
    }
     /* for now the methods will be synchronous. Make sure to use async awaits when dealing with a db connection. 
     filters in form: {completed: boolean, sortBy : string -> 'asc'or 'desc'} 
     the sortBy gets the tasks by its createdAt date
     */

    async getAllCompletedTasks(tasks){
        let completedTasks = tasks;
        completedTasks = completedTasks.filter((e)=>e.completed === true);
        return completedTasks;
    }   
    // since the tasks are stored by their createdAt date, we only need to implement a method to return the tasks by their descending dates
    getTaskDec(tasks){
        return tasks.slice().reverse(); 
    }

    async getTasks(filter = {}){
        // this should handle all forms of getTask calls and match to the right filters
        // Depending on what filters are specified, we need to handle and return data correspondingly

        const result = await this.taskRepo.getAllTasks()
        if(filter){
            if(filter.completed){
                result = await this.getAllCompletedTasks(result)
            }
            if(filter.order){
                if(filter.order === 'desc'){
                    result = this.getTaskDec(result)
                }
            }
        }
        return result
        
    }
    async getTaskById(id){
        const result =  await this.taskRepo.getTaskById(id)
        if(result){
            return result;
        }else{
            throw new Error(this.notFoundErrorMessage)
        }
    }
    async isValidTask(task){
        try{
            if(!task.title || typeof tasktitle === 'string'){
                return false
            }
            if(task.completed && typeof task.completed !== 'boolean' ){
                return false
            }
        }catch(e){
            throw new Error('This task is not valid!')
        }
        return true
    }

    //TODO: refactor this to handle restructuring the argument as a Task
    async createTask(newTask){
        // we give the new task an id and store in the system
        if(!this.isValidTask(newTask)){
            throw new Error(this.notValidTaskMessage)
        }
        newTask.id = await this.taskRepo.getUniqueId(); 
        return await this.taskRepo.createTask(newTask);
    }

    async updateTask(id, newTask){
        
        try{
            return this.taskRepo.updateTask(id, newTask);
        }catch(error){
            throw error
        }
    }

    async deleteTask(id){
        const task = this.taskRepo.getTaskById(id);
        if (task){
            this.taskRepo.deleteTask(id);
            return null; 
        }
        else{
            throw new Error (this.notFoundErrorMessage)
        }
    }


}
export default TaskService; 
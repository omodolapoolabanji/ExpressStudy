class TaskRepository{
    constructor(){
        this.tasks = []; // we opt in for an in memory store till we integrate database(s).
    }

    getUniqueId(){
        // the ids are sequential in the system. We might have gaps after deletions are made though
        return this.tasks.length + 1 
    }

    getAllTasks(){
        return this.tasks; 
    }

    getById(id){
        result = this.tasks.find((e)=>e.id === id);
        return result; 
    }
    createTask(task){
        this.tasks.push(task);
        return task; 
    }
    updateTask(id, newTask){
        // get the task from the repo using its id. If the task is found then reassign the tasks attributes
        task = this.getById(id);
        if (task){
            Object.assign(task, newTask)
        }
        else{
            throw new Error('Task was not found in the system!');
        }
        return null;
    }
    
    deleteTask(id){
        this.task = this.task.filter((t)=>t.id!==id);
      
    }

    

    
}

export default TaskRepository; 
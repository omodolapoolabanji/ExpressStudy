class TaskModel{
    constructor( id, title, completed){
        this.id = id;
        this.title = title; 
        this.completed =completed;
        this.createdAt= new Date().toLocaleString().split(',')[0]; 
    }

}

export default TaskModel; 
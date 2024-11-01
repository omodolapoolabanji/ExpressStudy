class TaskModel{
    constructor( {title, completed =false}){
        this.id;
        this.title = title; 
        this.completed =completed;
        this.createdAt= new Date(); 
    }

}

export default TaskModel; 
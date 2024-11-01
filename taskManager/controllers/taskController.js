export default class TaskController{
    constructor(taskService){
        this.taskService = taskService;
        this.genericInternalErrorMessage = 'Something went wrong, try again!'
    
    }
    //{completed: boolean, sortBy : string -> 'asc'or 'desc'} 
    //Controller for the GET method of route /tasks
    async getTask(req, res){
        // handle query params within the get request
        const filters = {completed: null, sortBy : null};
        try{
            if(req.query.completed){
            let completedStatus = req.query.completed.toString().toLowerCase()
            if( completedStatus === 'true' ){
            filters.completed = true }
            else if(completedStatus === 'false'){
                filters.completed = false
            }
            else{
                return res.status(400).json({message: 'Invalid completed type provided!'})
            }

            }
            if(req.query.sortBy){
                let sortByStatus = req.query.sortBy.toString().toLowerCase()
                if(sortByStatus === 'asc' || sortByStatus === 'desc'){
                    filters.sortBy = sortByStatus
                }else{
                    return res.status(400).json({message: 'orderBy should be in format: "desc" or "asc"'})
                }
            }
            return res.status(200).json(await this.taskService.getTasks(filters))
        }catch(e){
            return res.status(500).json({message:this.genericInternalErrorMessage })
        }
        
    }
    //Controller for the GET method of route /tasks/:id
    async getTaskById(req, res){
        try{
            const taskId = req.params.id
            if(taskId){
                if(isNaN(taskId)){
                    return res.status(400).json({message: 'The id provided is invalid!'})
                }
                const result = await this.taskService.getTaskById(taskId)
                return res.status(200).json(result)
            }
            else{
                return res.status(500).json({message : this.genericInternalErrorMessage})
            }
        }catch(e){
            console.error(e)
            return res.status(500).json({message : this.genericInternalErrorMessage})
        }
    }
    //Controller for the POST method of route /tasks
    async createTask(req, res){
    }
}
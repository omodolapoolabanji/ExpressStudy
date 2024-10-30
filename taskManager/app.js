import express from 'express'


//intialize a new express application.the variable app represents a new web server. 
const app = express()
// set a port 
const port = 3000


//create a GET endpoint
app.get('/', (request, response)=>{
    response.send('')
})

//get the app to listen for connections on the port defined earlier
//starts the express app and binds it to the port specified.
app.listen(port, ()=>{
    console.log(`testing listening on port ${port}`)
})

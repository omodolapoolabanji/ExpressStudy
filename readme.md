This repo would document my progress as I get acquinted with express js for building the backend for applications.

### Getting Started in Express:
    - init an npm project with app.js (or prefered main script) as an entrypoint using npm init
    - install express into the dir -> `npm install express`

    Alternatively, you can generate a skeleton using the express generator
    - ```npx express-generator```
### Turn on debug mode
    - set the DEBUG environment variable:  DEBUG=express:* ts-node backend/index.ts (assumes the file is called index.ts in the backend dir and executes with ts-node [this refers to the minutes summarizer project])
### Notes:
    - list all registered routes using app._router.stack for express() and use router.stack for express.Router()
    - order matters when defining routes, having dynamic routes (i.e. routes that take in parameters) before static ones could cause handling errors based on express matching convention. 
    

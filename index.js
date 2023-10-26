//import json server
const jsonserevr = require('json-server');

//create json server for media app
const mediaAppserver = jsonserevr.create();

//setup up path for json file
const router = jsonserevr.router('db.json')

//setup middleware for json file
const middleware = jsonserevr.defaults();

//create a port number
const port = process.env.port || 3001

//use middleware in app
mediaAppserver.use(middleware);
mediaAppserver.use(router);

//to listen for resolving requests from client
mediaAppserver.listen(port,()=>{
    console.log("listening to port " + port )
})


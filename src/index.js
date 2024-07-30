const express= require('express');
require('./db/mongoose')
const User=require('./models/users');
const Tasks=require('./models/tasks');
const userRouter=require('./routers/user');
const taskRouter=require('./routers/tasks');
const app=express();
const port=3000
app.use(userRouter);
app.use(taskRouter);

app.use(express.json());






app.listen(port,()=>{

    console.log("the Server Running on port "+port);
})
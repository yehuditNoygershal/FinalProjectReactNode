
// const path=require("path")
// const taskRouter=require('./routes/task')
// const app=express()
// app.use('/task',taskRouter);
// const midlleware=(req,res,next)=>{
//     console.log(`logged ${req.url} ${req.method}`);
//     next();
// }
// app.use(midlleware);



// app.listen(8000,function name() {
//     console.log("port 8000");
// })
require("dotenv").config()
const cors=require('cors');
const express=require("express")
const app=express();
const mongoose = require('mongoose')
const userRouter =require('./routes/Users')
const taskRouter =require('./routes/task')
const bodyParser = require('body-parser');


app.use(cors());
app.use(bodyParser.json());
app.use('/users', userRouter);
app.use('/task',taskRouter);


const PORT=process.env.PORT || 5000;

mongoose.connect(process.env.CONECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true}).then(
    ()=>app.listen(PORT,()=>console.log(`server runing on port ${PORT}`)))
    .catch((error)=>console.log(error.message));



